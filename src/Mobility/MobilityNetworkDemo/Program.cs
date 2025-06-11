using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Concurrent;
using System.Threading.Channels;

namespace MobilityNetworkDemo;

// Enum to represent the state of a vehicle
public enum VehicleStatus { Idle, EnRoute, Full }

// Represents a single vehicle in the fleet
public class Vehicle
{
    public int Id { get; }
    public int Capacity { get; }
    public string VehicleType { get; }
    public VehicleStatus Status { get; set; }

    // CHANGED: Made CurrentPassengers a private field with a public getter for better encapsulation
    private int _currentPassengers;
    public int CurrentPassengers => _currentPassengers;


    public Vehicle(int id, int capacity, string vehicleType)
    {
        Id = id;
        Capacity = capacity;
        VehicleType = vehicleType;
        Status = VehicleStatus.Idle;
        _currentPassengers = 0;
    }

    // Tries to add a passenger. Returns false if full.
    public bool TryAddPassenger()
    {
        // This method doesn't strictly need Interlocked since it's only called from the single-threaded processor loop,
        // but it's good practice if that ever changes.
        if (_currentPassengers < Capacity)
        {
            Interlocked.Increment(ref _currentPassengers);
            Status = _currentPassengers == Capacity ? VehicleStatus.Full : VehicleStatus.EnRoute;
            return true;
        }
        return false;
    }

    // ADDED: Method to remove a passenger after a trip.
    public void RemovePassenger()
    {
        // Use Interlocked for thread-safe decrementing, as multiple trips can finish concurrently.
        Interlocked.Decrement(ref _currentPassengers);

        // If the vehicle is now empty, it becomes Idle. Otherwise, it's still EnRoute.
        Status = _currentPassengers == 0 ? VehicleStatus.Idle : VehicleStatus.EnRoute;
    }
}
// Represents a ride request from a passenger
public record PassengerRequest(Guid Id);

// The main orchestrator class, representing the "brain" of the mobility network.
public class MobilityNetwork
{
    private readonly ILogger<MobilityNetwork> _logger;
    private readonly ConcurrentDictionary<int, Vehicle> _fleet = new();
    private readonly Channel<PassengerRequest> _requestChannel;
    private readonly List<VehicleConfig> _fleetSettings;

    public MobilityNetwork(ILogger<MobilityNetwork> logger, IOptions<List<VehicleConfig>> fleetSettings)
    {
        _logger = logger;
        _fleetSettings = fleetSettings.Value;
        _requestChannel = Channel.CreateUnbounded<PassengerRequest>();

        InitializeFleet();
    }

    private void InitializeFleet()
    {
        int vehicleIdCounter = 1;
        foreach (var config in _fleetSettings)
        {
            for (int i = 0; i < config.Count; i++)
            {
                var vehicle = new Vehicle(vehicleIdCounter, config.Capacity, config.VehicleType);
                _fleet.TryAdd(vehicleIdCounter, vehicle);
                vehicleIdCounter++;
            }
            _logger.LogInformation("Added {VehicleCount} of {VehicleType} (Capacity: {VehicleCapacity}) to the fleet.", config.Count, config.VehicleType, config.Capacity);
        }
        _logger.LogInformation("Mobility network initialized with {VehicleCount} total vehicles.", _fleet.Count);
    }

    public async Task SubmitRequestAsync(PassengerRequest request, CancellationToken cancellationToken)
    {
        await _requestChannel.Writer.WriteAsync(request, cancellationToken);
        _logger.LogInformation("Rider [ID: {RiderId}] submitted a new request.", request.Id.ToString("N")[..8]);
    }

    public async Task ProcessRequestsAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Network processor started. Waiting for ride requests...");

        await foreach (var request in _requestChannel.Reader.ReadAllAsync(cancellationToken))
        {
            _logger.LogWarning("Network processing request from Rider [ID: {RiderId}]", request.Id.ToString("N")[..8]);

            Vehicle? dispatchedVehicle = null;

            // Simple logic: Find the first available vehicle that is not full.
            // Using a lock or semaphore here could be more robust, but for this simulation, FirstOrDefault is sufficient.
            dispatchedVehicle = _fleet.Values.FirstOrDefault(v => v.Status != VehicleStatus.Full);

            if (dispatchedVehicle != null && dispatchedVehicle.TryAddPassenger())
            {
                _logger.LogInformation(
                    "-> Dispatched Vehicle [ID: {VehicleId}, Type: {VehicleType}] for Rider [ID: {RiderId}]. Vehicle is now at {PassengerCount}/{Capacity} capacity.",
                    dispatchedVehicle.Id,
                    dispatchedVehicle.VehicleType,
                    request.Id.ToString("N")[..8],
                    dispatchedVehicle.CurrentPassengers,
                    dispatchedVehicle.Capacity
                );

                // ADDED: Fire and forget a task to simulate the trip and free the vehicle later.
                // This is the key to fixing the resource leak.
                _ = SimulateTripAsync(dispatchedVehicle, request, cancellationToken);
            }
            else
            {
                _logger.LogError("!!! No available vehicles for Rider [ID: {RiderId}]. Request will be dropped in this demo.", request.Id.ToString("N")[..8]);
            }
            await Task.Delay(100, cancellationToken); // Brief delay between processing requests
        }
    }

    // ADDED: New method to simulate a passenger's trip.
    private async Task SimulateTripAsync(Vehicle vehicle, PassengerRequest request, CancellationToken cancellationToken)
    {
        // Simulate travel time with a random delay.
        int tripDurationMs = Random.Shared.Next(5000, 15000); // 5 to 15 seconds
        _logger.LogInformation("   (Trip Start) Rider {RiderId} is on a {Duration}s journey in Vehicle {VehicleId}.",
            request.Id.ToString("N")[..8], tripDurationMs / 1000, vehicle.Id);

        try
        {
            await Task.Delay(tripDurationMs, cancellationToken);

            // Passenger gets off the vehicle.
            vehicle.RemovePassenger();

            _logger.LogInformation(
                "   (Trip End) Rider {RiderId} has alighted from Vehicle {VehicleId}. Vehicle is now at {PassengerCount}/{Capacity} capacity. Status: {VehicleStatus}",
                request.Id.ToString("N")[..8],
                vehicle.Id,
                vehicle.CurrentPassengers,
                vehicle.Capacity,
                vehicle.Status
            );
        }
        catch (TaskCanceledException)
        {
            // If the simulation shuts down mid-trip, handle it gracefully.
            _logger.LogWarning("   (Trip Canceled) Trip for Rider {RiderId} was canceled due to simulation shutdown.", request.Id.ToString("N")[..8]);
        }
    }
}

public class Program
{
    public static async Task Main(string[] args)
    {
        var host = Host.CreateDefaultBuilder(args)
            .ConfigureServices((context, services) =>
            {
                // Bind the FleetSettings section
                services.Configure<List<VehicleConfig>>(context.Configuration.GetSection("FleetSettings"));

                // *** NEW: Bind the SimulationSettings section ***
                services.Configure<SimulationSettings>(context.Configuration.GetSection("SimulationSettings"));

                services.AddSingleton<MobilityNetwork>();
            })
            .Build();

        var logger = host.Services.GetRequiredService<ILogger<Program>>();

        // *** NEW: Get the simulation settings from the service provider ***
        var simSettings = host.Services.GetRequiredService<IOptions<SimulationSettings>>().Value;

        logger.LogInformation("Starting Fictional Manhattan Mobility Simulation...");

        var network = host.Services.GetRequiredService<MobilityNetwork>();

        using var cts = new CancellationTokenSource();

        var processorTask = Task.Run(() => network.ProcessRequestsAsync(cts.Token));

        var producerTask = Task.Run(async () =>
        {
            var random = new Random();
            while (!cts.Token.IsCancellationRequested)
            {
                var request = new PassengerRequest(Guid.NewGuid());
                await network.SubmitRequestAsync(request, cts.Token);
                await Task.Delay(TimeSpan.FromMilliseconds(random.Next(50, 500)), cts.Token);
            }
        });

        // --- Use the new settings for duration and logging ---
        int duration = simSettings.DurationInSeconds;
        logger.LogWarning("Simulation will run for {Duration} seconds. Press any key to stop early.", duration);

        var cancellationTask = Task.Run(() => Console.ReadKey(true));

        // *** MODIFIED: Use the variable from our settings ***
        await Task.WhenAny(cancellationTask, Task.Delay(TimeSpan.FromSeconds(duration)));

        // --- Graceful Shutdown ---
        logger.LogInformation("Shutting down simulation...");
        cts.Cancel();

        try
        {
            await Task.WhenAll(processorTask, producerTask);
        }
        catch (TaskCanceledException)
        {
            logger.LogInformation("All tasks cancelled gracefully.");
        }

        logger.LogInformation("Simulation finished.");
    }
}

// Represents the configuration for a specific type of vehicle in the fleet.
public class VehicleConfig
{
    public string VehicleType { get; set; } = "DefaultVehicle";
    public int Count { get; set; }
    public int Capacity { get; set; }
}

public class SimulationSettings
{
    public int DurationInSeconds { get; set; } = 30; // Default value of 30 seconds
}