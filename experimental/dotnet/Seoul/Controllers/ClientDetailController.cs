using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Seoul.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientDetailController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static readonly string[] Names = new[] 
        {
            "Amazon", "Apple", "Facebook", "Google", "Microsoft", "Netflix"
        };

        private static readonly string[] Cities = new[]
        {
            "Austin", "Mountain View", "San Francisco", "Menlo Park", "San Diego", "Los Angeles", "Santa Clara"
        };

        private static readonly string[] States = new[] 
        {
            "CA", "CO", "TX", "WA"
        };

        private readonly ILogger<ClientDetailController> _logger;

        public ClientDetailController(ILogger<ClientDetailController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ClientDetail> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5000).Select(index => new ClientDetail
            {
                // Date = DateTime.Now.AddDays(index),
                // TemperatureC = rng.Next(-20, 55),
                // Summary = Summaries[rng.Next(Summaries.Length)]
                ID = index,
                UniqueIdentifier = Guid.NewGuid(),
                Name = Names[rng.Next(Names.Length)],
                LegacyName = Names[rng.Next(Names.Length)],
                YearEstablished = (1900 + rng.Next(0, 110)).ToString(),
                StreetAddress = "",
                City = Cities[rng.Next(Cities.Length)],
                State = States[rng.Next(States.Length)],
                AccountManager = Names[rng.Next(Names.Length)] + " " + Names[rng.Next(Names.Length)],
                Email = Names[rng.Next(Names.Length)] + index.ToString() + "@" + Names[rng.Next(Names.Length)] + ".com"
            })
            .ToArray();
        }
    }
}
