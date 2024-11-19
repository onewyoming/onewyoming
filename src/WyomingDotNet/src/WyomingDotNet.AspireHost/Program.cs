var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.WyomingDotNet_Web>("web");

builder.Build().Run();
