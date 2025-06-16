using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Concurrent;
using System.ComponentModel.DataAnnotations;
using System.Threading.Channels;

namespace MobilityNetworkDemo;

// =================================================================================
// IMPROVEMENT: Primary constructors (a modern C# feature) are used for more 
// concise and readable class definitions.
// =================================================================================

/// <summary>
/// Represents a single vehicle in the fleet.
/// Now uses a primary constructor for conciseness.
/// </summary>
public class Vehicle(int id, int capacity, string vehicleType)
{
    public int Id { get; } = id;
    public int Capacity { get; } = capacity;
    public string VehicleType { get; } = vehicleType;
    public VehicleStatus Status { get; set; } = VehicleStatus.Idle;

    private int _currentPassengers = 0;
    public int CurrentPassengers => _currentPassengers;

    /// <summary>
    /// Tries to add a passenger to the vehicle.
    /// </summary>
    /// <returns>True if the passenger was added, false if the vehicle was already full.</returns>
    public bool TryAddPassenger()
    {
        // This logic is thread-safe for its intended use within the single request processor loop.
        if (_currentPassengers < Capacity)
        {
            Interlocked.Increment(ref _currentPassengers);
            Status = _currentPassengers == Capacity ? VehicleStatus.Full : VehicleStatus.EnRoute;
            return true;
        }
        return false;
    }

    /// <summary>
    /// Removes a passenger after a trip is complete, updating the vehicle's status.
    /// </summary>
    public void CompleteTripForPassenger()
    {
        // Decrement is thread-safe as multiple trips can finish concurrently.
        Interlocked.Decrement(ref _currentPassengers);

        // A vehicle is only Idle if it's completely empty.
        Status = _currentPassengers == 0 ? VehicleStatus.Idle : VehicleStatus.EnRoute;
    }
}

/// <summary>
/// Enum to represent the state of a vehicle.
/// </summary>
public enum VehicleStatus { Idle, EnRoute, Full }

/// <summary>
/// Represents a ride request from a passenger.
/// </summary>
public record PassengerRequest(Guid Id);


/// <summary>
/// The main orchestrator class, representing the "brain" of the mobility network.
/// </summary>
public class MobilityNetwork
{
    private readonly ILogger<MobilityNetwork> _logger;
    private readonly ConcurrentDictionary<int, Vehicle> _fleet = new();
    private readonly Channel<PassengerRequest> _requestChannel;
    private readonly List<VehicleConfig> _fleetSettings;

    // =================================================================================
    // IMPROVEMENT: An optimized queue for idle vehicles.
    // This avoids iterating the entire fleet for every request, making dispatching
    // an O(1) operation instead of O(N). This is a major performance enhancement.
    // =================================================================================
    private readonly ConcurrentQueue<Vehicle> _idleVehicles = new();

    public MobilityNetwork(ILogger<MobilityNetwork> logger, IOptions<List<VehicleConfig>> fleetSettings)
    {
        _logger = logger;
        // The .ValidateOnStart() call in Program.cs ensures these settings are valid.
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
                _idleVehicles.Enqueue(vehicle); // Add all new vehicles to the idle queue.
                vehicleIdCounter++;
            }
            _logger.LogInformation("Added {VehicleCount} of '{VehicleType}' (Capacity: {VehicleCapacity}) to the fleet.", config.Count, config.VehicleType, config.Capacity);
        }
        _logger.LogInformation("Mobility network initialized with {VehicleCount} total vehicles.", _fleet.Count);
    }

    /// <summary>
    /// Submits a passenger's request to the network's processing channel.
    /// </summary>
    public async Task SubmitRequestAsync(PassengerRequest request, CancellationToken cancellationToken)
    {
        await _requestChannel.Writer.WriteAsync(request, cancellationToken);
        _logger.LogInformation("Rider [ID: {RiderId}] submitted a new request.", request.Id.ToString("N")[..8]);
    }

    /// <summary>
    /// Continuously processes incoming ride requests from the channel.
    /// </summary>
    public async Task ProcessRequestsAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Network processor started. Waiting for ride requests...");

        await foreach (var request in _requestChannel.Reader.ReadAllAsync(cancellationToken))
        {
            // IMPROVEMENT: Changed log level from Warning to Information for a standard operation.
            _logger.LogInformation("Network processing request from Rider [ID: {RiderId}]", request.Id.ToString("N")[..8]);

            // === OPTIMIZED DISPATCH LOGIC ===
            Vehicle? dispatchedVehicle = null;

            // 1. First, try to get a completely idle vehicle from the queue (very fast).
            if (_idleVehicles.TryDequeue(out var idleVehicle))
            {
                dispatchedVehicle = idleVehicle;
            }
            // 2. If no idle vehicles, check for an en-route vehicle with space (ride-sharing).
            //    This is the fallback and more expensive, but only runs when the fleet is busy.
            else
            {
                dispatchedVehicle = _fleet.Values.FirstOrDefault(v => v.Status == VehicleStatus.EnRoute);
            }

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

                // Fire and forget a task to simulate the trip. This allows the processor
                // to immediately handle the next request without waiting.
                _ = SimulateTripAsync(dispatchedVehicle, request, cancellationToken);
            }
            else
            {
                _logger.LogError("!!! No available vehicles for Rider [ID: {RiderId}]. Request will be dropped in this demo.", request.Id.ToString("N")[..8]);
                // In a real-world scenario, you would queue the request or notify the user.
            }

            // Brief delay to simulate processing time and prevent a tight loop.
            await Task.Delay(100, cancellationToken);
        }
    }

    /// <summary>
    /// Simulates a single passenger trip, releasing the vehicle resource upon completion.
    /// </summary>
    private async Task SimulateTripAsync(Vehicle vehicle, PassengerRequest request, CancellationToken cancellationToken)
    {
        // Simulate travel time with a random delay.
        int tripDurationMs = Random.Shared.Next(5000, 15000); // 5 to 15 seconds
        _logger.LogInformation("    (Trip Start) Rider {RiderId} is on a {Duration}s journey in Vehicle {VehicleId}.",
            request.Id.ToString("N")[..8], tripDurationMs / 1000, vehicle.Id);

        try
        {
            await Task.Delay(tripDurationMs, cancellationToken);

            // Passenger gets off the vehicle.
            vehicle.CompleteTripForPassenger();

            _logger.LogInformation(
                "    (Trip End) Rider {RiderId} has alighted from Vehicle {VehicleId}. Vehicle is now at {PassengerCount}/{Capacity} capacity. Status: {VehicleStatus}",
                request.Id.ToString("N")[..8],
                vehicle.Id,
                vehicle.CurrentPassengers,
                vehicle.Capacity,
                vehicle.Status
            );

            // === CRITICAL STEP FOR NEW LOGIC ===
            // If the vehicle is now idle, return it to the queue to be dispatched again.
            if (vehicle.Status == VehicleStatus.Idle)
            {
                _idleVehicles.Enqueue(vehicle);
                _logger.LogInformation("    (Vehicle {VehicleId} is now idle and available for new requests)", vehicle.Id);
            }
        }
        catch (TaskCanceledException)
        {
            _logger.LogWarning("    (Trip Canceled) Trip for Rider {RiderId} was canceled due to simulation shutdown.", request.Id.ToString("N")[..8]);
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
                // =================================================================================
                // FIX: The .ValidateDataAnnotations() method requires the following NuGet package.
                // Please ensure it is added to your project file (.csproj) to resolve the error.
                //
                // <PackageReference Include="Microsoft.Extensions.Options.DataAnnotations" Version="10.0.0-preview.5.25277.114" />
                // =================================================================================
                services.AddOptions<List<VehicleConfig>>()
                    .Bind(context.Configuration.GetSection("FleetSettings"))
                    .ValidateDataAnnotations()
                    .ValidateOnStart();

                services.AddOptions<SimulationSettings>()
                    .Bind(context.Configuration.GetSection("SimulationSettings"))
                    .ValidateDataAnnotations()
                    .ValidateOnStart();

                services.AddSingleton<MobilityNetwork>();
            })
            .Build();

        var logger = host.Services.GetRequiredService<ILogger<Program>>();

        try
        {
            await RunSimulationAsync(host, logger);
        }
        catch (OptionsValidationException ex)
        {
            logger.LogError("Configuration validation failed. Please check your appsettings.json.");
            foreach (var failure in ex.Failures)
            {
                logger.LogError("- {FailureMessage}", failure);
            }
        }
    }

    private static async Task RunSimulationAsync(IHost host, ILogger<Program> logger)
    {
        var simSettings = host.Services.GetRequiredService<IOptions<SimulationSettings>>().Value;
        logger.LogInformation("Starting Fictional Mobility Simulation...");

        var network = host.Services.GetRequiredService<MobilityNetwork>();
        using var cts = new CancellationTokenSource();

        // Start the network processor task
        var processorTask = Task.Run(() => network.ProcessRequestsAsync(cts.Token), cts.Token);

        // Start the request producer task
        var producerTask = Task.Run(async () =>
        {
            while (!cts.Token.IsCancellationRequested)
            {
                var request = new PassengerRequest(Guid.NewGuid());
                await network.SubmitRequestAsync(request, cts.Token);
                // Use the configured request interval
                await Task.Delay(TimeSpan.FromMilliseconds(Random.Shared.Next(simSettings.MinRequestIntervalMs, simSettings.MaxRequestIntervalMs)), cts.Token);
            }
        }, cts.Token);

        int duration = simSettings.DurationInSeconds;
        logger.LogWarning("Simulation will run for {Duration} seconds. Press any key to stop early.", duration);

        var cancellationTask = Task.Run(() => Console.ReadKey(true), cts.Token);
        var timerTask = Task.Delay(TimeSpan.FromSeconds(duration), cts.Token);

        // Wait for either the user to press a key or the simulation timer to finish
        await Task.WhenAny(cancellationTask, timerTask);

        // --- Graceful Shutdown ---
        logger.LogInformation("Shutting down simulation...");
        await cts.CancelAsync(); // Use CancelAsync for modern async shutdown

        try
        {
            await Task.WhenAll(processorTask, producerTask);
        }
        catch (OperationCanceledException)
        {
            // This is expected during a graceful shutdown.
            logger.LogInformation("All tasks cancelled gracefully.");
        }

        logger.LogInformation("Simulation finished.");
    }
}

/// <summary>
/// Represents the configuration for a specific type of vehicle.
/// IMPROVEMENT: Uses a primary constructor and data annotations for validation.
/// </summary>
public class VehicleConfig(string vehicleType, int count, int capacity)
{
    [Required]
    public string VehicleType { get; set; } = vehicleType;

    [Range(1, 10000, ErrorMessage = "Vehicle count must be between 1 and 10,000.")]
    public int Count { get; set; } = count;

    [Range(1, 100, ErrorMessage = "Vehicle capacity must be between 1 and 100.")]
    public int Capacity { get; set; } = capacity;
}


/// <summary>
/// Represents general settings for the simulation run.
/// IMPROVEMENT: Uses a primary constructor and data annotations for validation.
/// </summary>
public class SimulationSettings
{
    [Range(5, 300, ErrorMessage = "Simulation duration must be between 5 and 300 seconds.")]
    public int DurationInSeconds { get; set; } = 30;

    [Range(10, 1000, ErrorMessage = "Minimum request interval must be between 10 and 1000 ms.")]
    public int MinRequestIntervalMs { get; set; } = 50;

    [Range(100, 2000, ErrorMessage = "Maximum request interval must be between 100 and 2000 ms.")]
    public int MaxRequestIntervalMs { get; set; } = 500;
}
