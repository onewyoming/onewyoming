I have the following code but it doesn't run. Can you fix these build errors for me? 

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Concurrent;
using System.ComponentModel.DataAnnotations;
using System.Threading.Channels;

namespace MobilityNetworkDemo;

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

    public bool TryAddPassenger()
    {
        if (_currentPassengers < Capacity)
        {
            Interlocked.Increment(ref _currentPassengers);
            Status = _currentPassengers == Capacity ? VehicleStatus.Full : VehicleStatus.EnRoute;
            return true;
        }
        return false;
    }

    public void CompleteTripForPassenger()
    {
        Interlocked.Decrement(ref _currentPassengers);
        Status = _currentPassengers == 0 ? VehicleStatus.Idle : VehicleStatus.EnRoute;
    }
}

public enum VehicleStatus { Idle, EnRoute, Full }

public record PassengerRequest(Guid Id);

/// <summary>
/// The main orchestrator class, representing the "brain" of the mobility network.
/// </summary>
public partial class MobilityNetwork // Made partial for LoggerMessage extensions
{
    private readonly ILogger<MobilityNetwork> _logger;
    private readonly ConcurrentDictionary<int, Vehicle> _fleet = new();
    private readonly Channel<PassengerRequest> _requestChannel;
    private readonly List<VehicleConfig> _fleetSettings;
    private readonly ConcurrentQueue<Vehicle> _idleVehicles = new();

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
                _idleVehicles.Enqueue(vehicle);
                vehicleIdCounter++;
            }
            Log.AddedVehicleType(_logger, config.Count, config.VehicleType, config.Capacity);
        }
        Log.NetworkInitialized(_logger, _fleet.Count);
    }

    public async Task SubmitRequestAsync(PassengerRequest request, CancellationToken cancellationToken)
    {
        await _requestChannel.Writer.WriteAsync(request, cancellationToken);
        Log.RequestSubmitted(_logger, request.Id.ToString("N")[..8]);
    }

    public async Task ProcessRequestsAsync(CancellationToken cancellationToken)
    {
        Log.NetworkProcessorStarted(_logger);

        await foreach (var request in _requestChannel.Reader.ReadAllAsync(cancellationToken))
        {
            string riderId = request.Id.ToString("N")[..8];
            Log.ProcessingRequest(_logger, riderId);

            Vehicle? dispatchedVehicle = null;

            if (_idleVehicles.TryDequeue(out var idleVehicle))
            {
                dispatchedVehicle = idleVehicle;
            }
            else
            {
                dispatchedVehicle = _fleet.Values.FirstOrDefault(v => v.Status == VehicleStatus.EnRoute);
            }

            if (dispatchedVehicle != null && dispatchedVehicle.TryAddPassenger())
            {
                Log.DispatchedVehicle(
                    _logger,
                    dispatchedVehicle.Id,
                    dispatchedVehicle.VehicleType,
                    riderId,
                    dispatchedVehicle.CurrentPassengers,
                    dispatchedVehicle.Capacity
                );
                _ = SimulateTripAsync(dispatchedVehicle, request, cancellationToken);
            }
            else
            {
                Log.NoAvailableVehicles(_logger, riderId);
            }
            await Task.Delay(100, cancellationToken);
        }
    }

    private async Task SimulateTripAsync(Vehicle vehicle, PassengerRequest request, CancellationToken cancellationToken)
    {
        int tripDurationMs = Random.Shared.Next(5000, 15000);
        string riderId = request.Id.ToString("N")[..8];
        Log.TripStarted(_logger, riderId, tripDurationMs / 1000, vehicle.Id);

        try
        {
            await Task.Delay(tripDurationMs, cancellationToken);
            vehicle.CompleteTripForPassenger();
            Log.TripEnded(_logger, riderId, vehicle.Id, vehicle.CurrentPassengers, vehicle.Capacity, vehicle.Status);

            if (vehicle.Status == VehicleStatus.Idle)
            {
                _idleVehicles.Enqueue(vehicle);
                Log.VehicleNowIdle(_logger, vehicle.Id);
            }
        }
        catch (TaskCanceledException)
        {
            Log.TripCanceled(_logger, riderId);
        }
    }

    // =================================================================================
    // IMPROVEMENT: Source-Generated Logging.
    // This creates high-performance logging delegates at compile time, which
    // automatically handle checking if a log level is enabled, resolving CA1873.
    // =================================================================================
    private static partial class Log
    {
        [LoggerMessage(Level = LogLevel.Information, Message = "Added {VehicleCount} of '{VehicleType}' (Capacity: {VehicleCapacity}) to the fleet.")]
        public static partial void AddedVehicleType(ILogger logger, int vehicleCount, string vehicleType, int vehicleCapacity);

        [LoggerMessage(Level = LogLevel.Information, Message = "Mobility network initialized with {VehicleCount} total vehicles.")]
        public static partial void NetworkInitialized(ILogger logger, int vehicleCount);

        [LoggerMessage(Level = LogLevel.Information, Message = "Rider [ID: {RiderId}] submitted a new request.")]
        public static partial void RequestSubmitted(ILogger logger, string riderId);

        [LoggerMessage(Level = LogLevel.Information, Message = "Network processor started. Waiting for ride requests...")]
        public static partial void NetworkProcessorStarted(ILogger logger);

        [LoggerMessage(Level = LogLevel.Information, Message = "Network processing request from Rider [ID: {RiderId}]")]
        public static partial void ProcessingRequest(ILogger logger, string riderId);

        [LoggerMessage(Level = LogLevel.Information, Message = "-> Dispatched Vehicle [ID: {VehicleId}, Type: {VehicleType}] for Rider [ID: {RiderId}]. Vehicle is now at {PassengerCount}/{Capacity} capacity.")]
        public static partial void DispatchedVehicle(ILogger logger, int vehicleId, string vehicleType, string riderId, int passengerCount, int capacity);

        [LoggerMessage(Level = LogLevel.Error, Message = "!!! No available vehicles for Rider [ID: {RiderId}]. Request will be dropped in this demo.")]
        public static partial void NoAvailableVehicles(ILogger logger, string riderId);

        [LoggerMessage(Level = LogLevel.Information, Message = "    (Trip Start) Rider {RiderId} is on a {Duration}s journey in Vehicle {VehicleId}.")]
        public static partial void TripStarted(ILogger logger, string riderId, int duration, int vehicleId);

        [LoggerMessage(Level = LogLevel.Information, Message = "    (Trip End) Rider {RiderId} has alighted from Vehicle {VehicleId}. Vehicle is now at {PassengerCount}/{Capacity} capacity. Status: {VehicleStatus}")]
        public static partial void TripEnded(ILogger logger, string riderId, int vehicleId, int passengerCount, int capacity, VehicleStatus vehicleStatus);

        [LoggerMessage(Level = LogLevel.Information, Message = "    (Vehicle {VehicleId} is now idle and available for new requests)")]
        public static partial void VehicleNowIdle(ILogger logger, int vehicleId);

        [LoggerMessage(Level = LogLevel.Warning, Message = "    (Trip Canceled) Trip for Rider {RiderId} was canceled due to simulation shutdown.")]
        public static partial void TripCanceled(ILogger logger, string riderId);
    }
}


public partial class Program // Made partial for LoggerMessage extensions
{
    public static async Task Main(string[] args)
    {
        var host = Host.CreateDefaultBuilder(args)
            .ConfigureServices((context, services) =>
            {
                // FIX: The .ValidateDataAnnotations() method requires the following NuGet package.
                // Please ensure it is added to your project file (.csproj) to resolve the error.
                //
                // <PackageReference Include="Microsoft.Extensions.Options.DataAnnotations" Version="10.0.0-preview.5.25277.114" />
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
            Log.ConfigValidationError(logger, ex);
            foreach (var failure in ex.Failures)
            {
                Log.ConfigValidationFailure(logger, failure);
            }
        }
    }

    private static async Task RunSimulationAsync(IHost host, ILogger<Program> logger)
    {
        var simSettings = host.Services.GetRequiredService<IOptions<SimulationSettings>>().Value;
        Log.SimulationStarting(logger);

        var network = host.Services.GetRequiredService<MobilityNetwork>();
        using var cts = new CancellationTokenSource();

        var processorTask = Task.Run(() => network.ProcessRequestsAsync(cts.Token), cts.Token);
        var producerTask = Task.Run(async () =>
        {
            while (!cts.Token.IsCancellationRequested)
            {
                var request = new PassengerRequest(Guid.NewGuid());
                await network.SubmitRequestAsync(request, cts.Token);
                await Task.Delay(TimeSpan.FromMilliseconds(Random.Shared.Next(simSettings.MinRequestIntervalMs, simSettings.MaxRequestIntervalMs)), cts.Token);
            }
        }, cts.Token);

        int duration = simSettings.DurationInSeconds;
        Log.SimulationWillRun(logger, duration);

        var cancellationTask = Task.Run(() => Console.ReadKey(true), cts.Token);
        var timerTask = Task.Delay(TimeSpan.FromSeconds(duration), cts.Token);

        await Task.WhenAny(cancellationTask, timerTask);

        Log.ShuttingDown(logger);
        await cts.CancelAsync();

        try
        {
            await Task.WhenAll(processorTask, producerTask);
        }
        catch (OperationCanceledException)
        {
            Log.TasksCancelled(logger);
        }

        Log.SimulationFinished(logger);
    }

    private static partial class Log
    {
        [LoggerMessage(Level = LogLevel.Error, Message = "Configuration validation failed. Please check your appsettings.json.")]
        public static partial void ConfigValidationError(ILogger logger, OptionsValidationException ex);

        [LoggerMessage(Level = LogLevel.Error, Message = "- {FailureMessage}")]
        public static partial void ConfigValidationFailure(ILogger logger, string failureMessage);

        [LoggerMessage(Level = LogLevel.Information, Message = "Starting Fictional Mobility Simulation...")]
        public static partial void SimulationStarting(ILogger logger);

        [LoggerMessage(Level = LogLevel.Warning, Message = "Simulation will run for {Duration} seconds. Press any key to stop early.")]
        public static partial void SimulationWillRun(ILogger logger, int duration);

        [LoggerMessage(Level = LogLevel.Information, Message = "Shutting down simulation...")]
        public static partial void ShuttingDown(ILogger logger);

        [LoggerMessage(Level = LogLevel.Information, Message = "All tasks cancelled gracefully.")]
        public static partial void TasksCancelled(ILogger logger);

        [LoggerMessage(Level = LogLevel.Information, Message = "Simulation finished.")]
        public static partial void SimulationFinished(ILogger logger);
    }
}

public class VehicleConfig(string vehicleType, int count, int capacity)
{
    [Required]
    public string VehicleType { get; set; } = vehicleType;
    [Range(1, 10000, ErrorMessage = "Vehicle count must be between 1 and 10,000.")]
    public int Count { get; set; } = count;
    [Range(1, 100, ErrorMessage = "Vehicle capacity must be between 1 and 100.")]
    public int Capacity { get; set; } = capacity;
}

public class SimulationSettings
{
    [Range(5, 300, ErrorMessage = "Simulation duration must be between 5 and 300 seconds.")]
    public int DurationInSeconds { get; set; } = 30;
    [Range(10, 1000, ErrorMessage = "Minimum request interval must be between 10 and 1000 ms.")]
    public int MinRequestIntervalMs { get; set; } = 50;
    [Range(100, 2000, ErrorMessage = "Maximum request interval must be between 100 and 2000 ms.")]
    public int MaxRequestIntervalMs { get; set; } = 500;
}
```

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "FleetSettings": [
    {
      "VehicleType": "Small Minivan",
      "Count": 500,
      "Capacity": 6
    },
    {
      "VehicleType": "Large Shuttle",
      "Count": 2000,
      "Capacity": 40
    }
  ],
  "SimulationSettings": {
    "DurationInSeconds": 30
  }
}
```

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

  <ItemGroup>
    <!-- Updated package versions to align with the resolved preview.5.25277.114 -->
    <PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="10.0.0-preview.5.25277.114" />
    <PackageReference Include="Microsoft.Extensions.Hosting" Version="10.0.0-preview.5.25277.114" />
    <PackageReference Include="Microsoft.Extensions.Hosting.Abstractions" Version="10.0.0-preview.5.25277.114" />
    <PackageReference Include="Microsoft.Extensions.Logging" Version="10.0.0-preview.5.25277.114" />
    <PackageReference Include="Microsoft.Extensions.Options" Version="10.0.0-preview.5.25277.114" />
    <PackageReference Include="Microsoft.Extensions.Options.DataAnnotations" Version="10.0.0-preview.5.25277.114" />
  </ItemGroup>

  <ItemGroup>
    <None Update="appsettings.json">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </None>
  </ItemGroup>

</Project>
```





















<div class="flex items-center"><p>Due to unexpected capacity constraints, Claude is unable to respond to your message. Please try again soon.&nbsp;Or consider <a href="/upgrade/pro" class="font-bold underline" rel="noreferrer">upgrading to Claude Pro</a>.</p></div>
