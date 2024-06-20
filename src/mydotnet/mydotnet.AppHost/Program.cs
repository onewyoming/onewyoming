var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.AnalyticsWebApi>("analyticswebapi");

builder.Build().Run();
