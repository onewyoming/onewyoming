var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.dotnet10preview5_ApiService>("apiservice");

builder.AddProject<Projects.dotnet10preview5_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithReference(apiService)
    .WaitFor(apiService);

builder.Build().Run();
