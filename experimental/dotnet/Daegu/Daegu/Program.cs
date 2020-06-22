using System.Collections.Generic;
using System.Linq;

namespace Daegu
{
    class Potato
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<Potato> potatoes = new List<Potato>();
            Potato potato1 = new Potato();
            potato1.Id = 1;
            potato1.Name = null;
            potato1.Type = null;
            potatoes.Add(potato1);
            Potato potato2 = new Potato();
            potato2.Id = 1;
            potato2.Name = "Russett";
            potato2.Type = "Idaho";
            potatoes.Add(potato2);
            var filteredPotatoes = potatoes.Where(potato => !(potato.Name == "Russett" && potato.Type == "Idaho")).ToList();
        }
    }
}
