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
    public int CurrentPassengers { get; set; }

    public Vehicle(int id, int capacity, string vehicleType)
    {
        Id = id;
        Capacity = capacity;
        VehicleType = vehicleType;
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
    private readonly ConcurrentDictionary<int, Vehicle> _fleet = new();
    private readonly Channel<PassengerRequest> _requestChannel;
    private readonly List<VehicleConfig> _fleetSettings;

    //Inject IOptions<List<VehicleConfig>> to get the fleet settings
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
        // The fleet is now built dynamically based on the injected settings.
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

        await foreach (var request in _requestChannel.Reader.ReadAllAsync(cancellationToken))
        {
            _logger.LogWarning("Network processing request from Rider [ID: {RiderId}]", request.Id.ToString("N")[..8]);

            Vehicle? dispatchedVehicle = null;

            // Simple logic: Find the first available vehicle that is not full.
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
            }
            else
            {
                _logger.LogError("!!! No available vehicles for Rider [ID: {RiderId}]. Request will be dropped in this demo.", request.Id.ToString("N")[..8]);
            }

            await Task.Delay(100, cancellationToken);
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
                // Bind the "FleetSettings" section from appsettings.json to our VehicleConfig class
                // and register it in the DI container.
                services.Configure<List<VehicleConfig>>(context.Configuration.GetSection("FleetSettings"));

                services.AddSingleton<MobilityNetwork>();
            })
            .Build();

        var logger = host.Services.GetRequiredService<ILogger<Program>>();
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

        logger.LogWarning("Simulation will run for 15 seconds. Press any key to stop early.");
        var cancellationTask = Task.Run(() => Console.ReadKey(true));
        await Task.WhenAny(cancellationTask, Task.Delay(TimeSpan.FromSeconds(15)));

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

