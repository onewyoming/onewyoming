using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Concurrent;
using System.Threading.Channels;
using System; // For Random.Shared
using static MobilityNetworkDemo.MobilityNetwork.Log; // Allow direct calls to Log.VehicleAdded etc.

namespace MobilityNetworkDemo;

// Enum to represent the state of a vehicle
public enum VehicleStatus { Idle, EnRoute, Full }

// Represents a single vehicle in the fleet
// IMPROVEMENT: Using primary constructor (C# 12)
public class Vehicle(int id, int capacity, string vehicleType)
{
    public int Id { get; } = id;
    public int Capacity { get; } = capacity;
    public string VehicleType { get; } = vehicleType;
    public VehicleStatus Status { get; private set; } = VehicleStatus.Idle; // Initialized in primary constructor

    // Made CurrentPassengers a private field with a public getter for better encapsulation
    private int _currentPassengers = 0; // Initialized in primary constructor
    public int CurrentPassengers => _currentPassengers;

    // ADDED: Method to allow MobilityNetwork to explicitly manage vehicle status.
    // This helps clarify when a vehicle is truly 'Idle' and ready to be put back in the pool.
    public void SetStatus(VehicleStatus newStatus)
    {
        Status = newStatus;
    }

    // Tries to add a passenger. Returns false if full.
    public bool TryAddPassenger()
    {
        // This method doesn't strictly need Interlocked since it's only called from the single-threaded processor loop,
        // but it's good practice if that ever changes.
        if (_currentPassengers < Capacity)
        {
            Interlocked.Increment(ref _currentPassengers);
            // Status update here is based on passenger count, but main status management is with SetStatus for pool management.
            Status = _currentPassengers == Capacity ? VehicleStatus.Full : VehicleStatus.EnRoute;
            return true;
        }
        return false;
    }

    // Method to remove a passenger after a trip.
    public void RemovePassenger()
    {
        // Use Interlocked for thread-safe decrementing, as multiple trips can finish concurrently.
        Interlocked.Decrement(ref _currentPassengers);

        // If the vehicle is now empty, its status is updated. The MobilityNetwork decides when it's idle for the pool.
        Status = _currentPassengers == 0 ? VehicleStatus.Idle : VehicleStatus.EnRoute;
    }
}

// Represents a ride request from a passenger
// IMPROVEMENT: Using 'record struct' for small, immutable value types (C# 10+)
public record struct PassengerRequest(Guid Id);

// The main orchestrator class, representing the "brain" of the mobility network.
// IMPROVEMENT: Added 'partial' keyword and refined primary constructor usage (C# 12)
public partial class MobilityNetwork(ILogger<MobilityNetwork> logger, IOptions<List<VehicleConfig>> fleetSettingsOptions)
{
    private readonly ILogger<MobilityNetwork> _logger = logger;
    private readonly ConcurrentDictionary<int, Vehicle> _fleet = new();

    // IMPROVEMENT: ConcurrentBag to efficiently manage available (idle) vehicles (O(1) access)
    private readonly ConcurrentBag<Vehicle> _idleVehicles = new();
    private readonly Channel<PassengerRequest> _requestChannel = Channel.CreateUnbounded<PassengerRequest>();
    // Access Value directly from the primary constructor parameter
    private readonly List<VehicleConfig> _fleetSettings = fleetSettingsOptions.Value;

    // IMPROVEMENT: Defined a static partial class for high-performance logging (LoggerMessage)
    // This eliminates boxing and reduces overhead for frequent log calls.
    internal static partial class Log
    {
        [LoggerMessage(EventId = 1, Level = LogLevel.Information,
            Message = "Added {VehicleCount} of {VehicleType} (Capacity: {VehicleCapacity}) to the fleet.")]
        internal static partial void VehicleAdded(ILogger logger, int vehicleCount, string vehicleType, int vehicleCapacity);

        [LoggerMessage(EventId = 2, Level = LogLevel.Information,
            Message = "Mobility network initialized with {VehicleCount} total vehicles.")]
        internal static partial void FleetInitialized(ILogger logger, int vehicleCount);

        [LoggerMessage(EventId = 3, Level = LogLevel.Information,
            Message = "Rider [ID: {RiderId}] submitted a new request.")]
        internal static partial void RiderRequestSubmitted(ILogger logger, string riderId);

        [LoggerMessage(EventId = 4, Level = LogLevel.Warning,
            Message = "Network processing request from Rider [ID: {RiderId}]")]
        internal static partial void ProcessingRiderRequest(ILogger logger, string riderId);

        [LoggerMessage(EventId = 5, Level = LogLevel.Information,
            Message = "-> Dispatched Vehicle [ID: {VehicleId}, Type: {VehicleType}] for Rider [ID: {RiderId}]. Vehicle is now at {PassengerCount}/{Capacity} capacity.")]
        internal static partial void VehicleDispatched(ILogger logger, int vehicleId, string vehicleType, string riderId, int passengerCount, int capacity);

        [LoggerMessage(EventId = 6, Level = LogLevel.Error,
            Message = "!!! No available vehicles for Rider [ID: {RiderId}] or vehicle failed to accept passenger. Request will be dropped.")]
        internal static partial void NoVehiclesAvailable(ILogger logger, string riderId);

        [LoggerMessage(EventId = 7, Level = LogLevel.Information,
            Message = "   (Trip Start) Rider {RiderId} is on a {Duration}s journey in Vehicle {VehicleId}.")]
        internal static partial void TripStarted(ILogger logger, string riderId, double duration, int vehicleId);

        [LoggerMessage(EventId = 8, Level = LogLevel.Warning,
            Message = "   (Trip Canceled) Trip for Rider {RiderId} was canceled due to simulation shutdown.")]
        internal static partial void TripCanceled(ILogger logger, string riderId);

        [LoggerMessage(EventId = 9, Level = LogLevel.Information,
            Message = "   (Trip End) Rider {RiderId} has alighted from Vehicle {VehicleId}. Vehicle is now at {PassengerCount}/{Capacity} capacity. Status: {VehicleStatus}")]
        internal static partial void TripEnded(ILogger logger, string riderId, int vehicleId, int passengerCount, int capacity, VehicleStatus vehicleStatus);

        [LoggerMessage(EventId = 10, Level = LogLevel.Error,
            Message = "An unexpected error occurred while processing request for Rider [ID: {RiderId}]. Request dropped.")]
        internal static partial void RequestProcessingError(ILogger logger, Exception exception, string riderId);

        [LoggerMessage(EventId = 11, Level = LogLevel.Error,
            Message = "!!! Vehicle [ID: {VehicleId}] was taken but failed to add passenger. Returning to idle pool.")]
        internal static partial void VehicleAddPassengerFailed(ILogger logger, int vehicleId);
    }

    // InitializeFleet is called directly from the primary constructor context.
    // The static constructor was a misplacement and is removed.
    // The previous explicit constructors are also removed to avoid CS0111.
    public MobilityNetwork // This is the implicit constructor created by the primary constructor
    {
        get // Constructor body starts here
        {
            InitializeFleet();
        }
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
                _idleVehicles.Add(vehicle); // Add to the idle pool immediately as they are idle
                vehicle.SetStatus(VehicleStatus.Idle); // Ensure initial status is Idle
                vehicleIdCounter++;
            }
            // Use LoggerMessage
            VehicleAdded(_logger, config.Count, config.VehicleType, config.Capacity);
        }
        // Use LoggerMessage
        FleetInitialized(_logger, _fleet.Count);
    }

    public async Task SubmitRequestAsync(PassengerRequest request, CancellationToken cancellationToken)
    {
        await _requestChannel.Writer.WriteAsync(request, cancellationToken);
        // Use LoggerMessage
        RiderRequestSubmitted(_logger, request.Id.ToString("N")[..8]);
    }

    public async Task ProcessRequestsAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Network processor started. Waiting for ride requests...");

        await foreach (var request in _requestChannel.Reader.ReadAllAsync(cancellationToken))
        {
            // Use LoggerMessage
            ProcessingRiderRequest(_logger, request.Id.ToString("N")[..8]);

            try // IMPROVEMENT: try-catch for individual request processing robustness
            {
                Vehicle? dispatchedVehicle = null;

                // IMPROVEMENT: Get vehicle from the idle pool (O(1) access)
                if (_idleVehicles.TryTake(out dispatchedVehicle))
                {
                    // Vehicle is now busy for this request, mark it EnRoute
                    dispatchedVehicle.SetStatus(VehicleStatus.EnRoute);

                    if (dispatchedVehicle.TryAddPassenger())
                    {
                        // Use LoggerMessage
                        VehicleDispatched(
                            _logger,
                            dispatchedVehicle.Id,
                            dispatchedVehicle.VehicleType,
                            request.Id.ToString("N")[..8],
                            dispatchedVehicle.CurrentPassengers,
                            dispatchedVehicle.Capacity
                        );

                        // Fire and forget a task to simulate the trip and free the vehicle later.
                        _ = SimulateTripAsync(dispatchedVehicle, request, cancellationToken);
                    }
                    else
                    {
                        // This case should ideally not happen if a vehicle is truly 'idle' (capacity > 0),
                        // but as a safeguard, if it somehow can't take a passenger, return it to the idle pool.
                        // Use LoggerMessage
                        VehicleAddPassengerFailed(_logger, dispatchedVehicle.Id);
                        dispatchedVehicle.SetStatus(VehicleStatus.Idle); // Mark idle
                        _idleVehicles.Add(dispatchedVehicle); // Return to idle pool
                    }
                }
                else
                {
                    // Use LoggerMessage
                    NoVehiclesAvailable(_logger, request.Id.ToString("N")[..8]);
                }
            }
            catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested)
            {
                // Expected cancellation, re-throw to allow ReadAllAsync to complete cleanly
                throw;
            }
            catch (Exception ex)
            {
                // Use LoggerMessage
                RequestProcessingError(_logger, ex, request.Id.ToString("N")[..8]);
            }
            await Task.Delay(100, cancellationToken); // Brief delay between processing requests
        }
    }

    // New method to simulate a passenger's trip.
    private async Task SimulateTripAsync(Vehicle vehicle, PassengerRequest request, CancellationToken cancellationToken)
    {
        int tripDurationMs = Random.Shared.Next(5000, 15000); // 5 to 15 seconds
        // Use LoggerMessage
        TripStarted(_logger, request.Id.ToString("N")[..8], tripDurationMs / 1000.0, vehicle.Id);

        try
        {
            await Task.Delay(tripDurationMs, cancellationToken);

            vehicle.RemovePassenger();

            // If the vehicle is now empty, it's truly idle and can be returned to the pool
            if (vehicle.CurrentPassengers == 0)
            {
                vehicle.SetStatus(VehicleStatus.Idle);
                _idleVehicles.Add(vehicle); // Return to idle pool
            }
            // If vehicle.CurrentPassengers > 0, it means it's still carrying passengers from other trips
            // so it remains 'EnRoute' and is NOT added back to the idle pool until completely empty.

            // Use LoggerMessage
            TripEnded(
                _logger,
                request.Id.ToString("N")[..8],
                vehicle.Id,
                vehicle.CurrentPassengers,
                vehicle.Capacity,
                vehicle.Status
            );
        }
        catch (TaskCanceledException)
        {
            // Use LoggerMessage
            TripCanceled(_logger, request.Id.ToString("N")[..8]);
            // If a trip is canceled, ensure the vehicle is returned to a valid state
            if (vehicle.CurrentPassengers == 0)
            {
                vehicle.SetStatus(VehicleStatus.Idle);
                _idleVehicles.Add(vehicle);
            }
        }
    }
}

// IMPROVEMENT: Using primary constructor for Program.
// This allows direct access to the injected logger and services.
public class Program
{
    public static async Task Main(string[] args)
    {
        var host = Host.CreateDefaultBuilder(args)
            .ConfigureServices((context, services) =>
            {
                // Bind the FleetSettings section
                services.Configure<List<VehicleConfig>>(context.Configuration.GetSection("FleetSettings"));

                // Bind the SimulationSettings section
                services.Configure<SimulationSettings>(context.Configuration.GetSection("SimulationSettings"));

                services.AddSingleton<MobilityNetwork>();
            })
            .Build();

        var logger = host.Services.GetRequiredService<ILogger<Program>>();

        // Get the simulation settings from the service provider
        var simSettings = host.Services.GetRequiredService<IOptions<SimulationSettings>>().Value;

        logger.LogInformation("Starting Fictional Manhattan Mobility Simulation...");

        var network = host.Services.GetRequiredService<MobilityNetwork>();

        using var cts = new CancellationTokenSource();

        // This ensures the producer and processor tasks are monitored.
        var producerTask = Task.Run(async () =>
        {
            var random = new Random(); // Use instance Random here as it's within a specific task context
            while (!cts.Token.IsCancellationRequested)
            {
                var request = new PassengerRequest(Guid.NewGuid());
                await network.SubmitRequestAsync(request, cts.Token);
                await Task.Delay(TimeSpan.FromMilliseconds(random.Next(50, 500)), cts.Token);
            }
        });

        // The processor task is kept as an awaitable task for WhenAll
        var processorTask = Task.Run(() => network.ProcessRequestsAsync(cts.Token));

        // Use the new settings for duration and logging
        int duration = simSettings.DurationInSeconds;
        logger.LogWarning("Simulation will run for {Duration} seconds. Press any key to stop early.", duration);

        var cancellationTask = Task.Run(() => Console.ReadKey(true));

        await Task.WhenAny(cancellationTask, Task.Delay(TimeSpan.FromSeconds(duration)));

        // Graceful Shutdown
        logger.LogInformation("Shutting down simulation...");
        cts.Cancel();

        try
        {
            // Await both tasks to complete after cancellation
            await Task.WhenAll(processorTask, producerTask);
        }
        catch (TaskCanceledException)
        {
            logger.LogInformation("All tasks cancelled gracefully.");
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "An unexpected error occurred during simulation shutdown.");
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
