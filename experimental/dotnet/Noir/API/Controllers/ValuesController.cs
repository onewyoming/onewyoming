using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<User> Get()
        {
            string[] roles = new string[]{"Administrator", "Power User", "Janitor"};
            var user = new User(id: 42, siteId: 42, xxhrId: 42, username: "Captain1987", email: "daityaraj@hotmail.com", displayName: "Captain 1987 (Daityaraj)", roles: roles);
            return Ok(user);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            if (id <= 0) 
            {
                return "Welcome to Hubcap! You requested a non-positive id.";
            } 
            var stringBuilder = new System.Text.StringBuilder();
            int parameter; 
            if (id > 10)
            {
                parameter = 10;
            }
            else { parameter = id; }
            for (int i = 0; i < parameter; i++)
            {
                stringBuilder.Append(i);
            }
            return stringBuilder.ToString();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
