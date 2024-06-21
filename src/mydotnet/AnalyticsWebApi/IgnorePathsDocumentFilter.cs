using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace AnalyticsWebApi;

public class IgnorePathsDocumentFilter : IDocumentFilter
{
    public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
    {
        // Logic to remove the root path "/"
        if (swaggerDoc.Paths.ContainsKey("/"))
        {
            swaggerDoc.Paths.Remove("/");
        }
    }
}