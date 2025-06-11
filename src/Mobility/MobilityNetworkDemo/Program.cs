// To run this code, create a new C# Console App project in Visual Studio or using the CLI:
// > dotnet new console
// Then, add the required packages for logging and dependency injection:
// > dotnet add package Microsoft.Extensions.Hosting

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;

namespace MobilityNetworkDemo
{
    // Enum to represent the state of a vehicle
    public enum VehicleStatus { Idle, EnRoute, Full }

    // Represents a single vehicle in the fleet
    public class Vehicle
    {
        public int Id { get; }
        public int Capacity { get; }
        public VehicleStatus Status { get; set; }
        public int CurrentPassengers { get; set; }

        public Vehicle(int id, int capacity)
        {
            Id = id;
            Capacity = capacity;
            Status = VehicleStatus.Idle;
            CurrentPassengers = 0;
        }

        // Tries to add a passenger. Returns false if full.
        public bool TryAddPassenger()
        {
            if (CurrentPassengers < Capacity)
            {
                CurrentPassengers++;
                Status = CurrentPassengers == Capacity ? VehicleStatus.Full : VehicleStatus.EnRoute;
                return true;
            }
            return false;
        }
    }

    // Represents a ride request from a passenger
    public record PassengerRequest(Guid Id);

    // The main orchestrator class, representing the "brain" of the mobility network.
    public class MobilityNetwork
    {
        private readonly ILogger<MobilityNetwork> _logger;
        // Using a thread-safe dictionary to store the fleet for concurrent access.
        private readonly ConcurrentDictionary<int, Vehicle> _fleet = new();
        // A channel acts as an efficient, thread-safe queue for incoming requests.
        private readonly Channel<PassengerRequest> _requestChannel;

        public MobilityNetwork(ILogger<MobilityNetwork> logger)
        {
            _logger = logger;
            // Create an "unbounded" channel, meaning it can hold any number of requests.
            _requestChannel = Channel.CreateUnbounded<PassengerRequest>();

            // Initialize the fleet with some vehicles of different sizes
            InitializeFleet();
        }

        private void InitializeFleet()
        {
            // 5 small minivans (capacity 6)
            foreach (var i in Enumerable.Range(1, 5)) _fleet.TryAdd(i, new Vehicle(i, 6));
            // 2 large shuttles (capacity 40)
            foreach (var i in Enumerable.Range(6, 2)) _fleet.TryAdd(i, new Vehicle(i, 40));
            _logger.LogInformation("Mobility network initialized with {VehicleCount} vehicles.", _fleet.Count);
        }

        // This method is for producers (riders) to add requests to the system.
        public async Task SubmitRequestAsync(PassengerRequest request, CancellationToken cancellationToken)
        {
            await _requestChannel.Writer.WriteAsync(request, cancellationToken);
            _logger.LogInformation("Rider [ID: {RiderId}] submitted a new request.", request.Id.ToString("N")[..8]);
        }

        // This is the core consumer logic that processes requests.
        public async Task ProcessRequestsAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Network processor started. Waiting for ride requests...");

            // This will block until a request is available or the channel is closed.
            await foreach (var request in _requestChannel.Reader.ReadAllAsync(cancellationToken))
            {
                _logger.LogWarning("Network processing request from Rider [ID: {RiderId}]", request.Id.ToString("N")[..8]);

                Vehicle? dispatchedVehicle = null;

                // Simple logic: Find the first available vehicle that is not full.
                // A real system would have complex logic based on location, destination, etc.
                dispatchedVehicle = _fleet.Values.FirstOrDefault(v => v.Status != VehicleStatus.Full);

                if (dispatchedVehicle != null && dispatchedVehicle.TryAddPassenger())
                {
                    _logger.LogInformation(
                        "-> Dispatched Vehicle [ID: {VehicleId}] for Rider [ID: {RiderId}]. Vehicle is now at {PassengerCount}/{Capacity} capacity.",
                        dispatchedVehicle.Id,
                        request.Id.ToString("N")[..8],
                        dispatchedVehicle.CurrentPassengers,
                        dispatchedVehicle.Capacity
                    );
                }
                else
                {
                    _logger.LogError("!!! No available vehicles for Rider [ID: {RiderId}]. Request will be re-queued.", request.Id.ToString("N")[..8]);
                    // In a real app, you might re-queue the request or handle it differently.
                    // For this demo, we just log the failure.
                }

                // Simulate some processing time
                await Task.Delay(100, cancellationToken);
            }
        }
    }


    public class Program
    {
        public static async Task Main(string[] args)
        {
            // Use the modern generic host builder to set up dependency injection and logging
            var host = Host.CreateDefaultBuilder(args)
                .ConfigureServices((context, services) =>
                {
                    // Add our main network class as a singleton
                    services.AddSingleton<MobilityNetwork>();
                })
                .Build();

            var logger = host.Services.GetRequiredService<ILogger<Program>>();
            logger.LogInformation("Starting Fictional Manhattan Mobility Simulation...");

            var network = host.Services.GetRequiredService<MobilityNetwork>();

            // Use a CancellationTokenSource to gracefully shut down our tasks
            using var cts = new CancellationTokenSource();

            // --- Start the background tasks ---

            // 1. The Network Processor (Consumer)
            // This task constantly runs, waiting for requests to appear in the channel and processing them.
            var processorTask = Task.Run(() => network.ProcessRequestsAsync(cts.Token));

            // 2. The Rider Request Simulator (Producer)
            // This task simulates new people requesting rides every so often.
            var producerTask = Task.Run(async () =>
            {
                var random = new Random();
                while (!cts.Token.IsCancellationRequested)
                {
                    var request = new PassengerRequest(Guid.NewGuid());
                    await network.SubmitRequestAsync(request, cts.Token);
                    // Wait a random amount of time before the next request
                    await Task.Delay(TimeSpan.FromMilliseconds(random.Next(50, 500)), cts.Token);
                }
            });

            // Let the simulation run for a short period
            logger.LogWarning("Simulation will run for 15 seconds. Press any key to stop early.");
            var cancellationTask = Task.Run(() => Console.ReadKey(true));
            await Task.WhenAny(cancellationTask, Task.Delay(TimeSpan.FromSeconds(15)));

            // --- Graceful Shutdown ---
            logger.LogInformation("Shutting down simulation...");
            cts.Cancel(); // Signal cancellation to all tasks

            // Wait for tasks to finish cleanly
            try
            {
                await Task.WhenAll(processorTask, producerTask);
            }
            catch (TaskCanceledException)
            {
                // This is expected when the simulation ends.
                logger.LogInformation("All tasks cancelled gracefully.");
            }

            logger.LogInformation("Simulation finished.");
        }
    }
}
