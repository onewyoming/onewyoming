using System;
namespace Seoul 
{
    public class ClientDetail 
    {
        public int ID { get; set; }
        public Guid UniqueIdentifier { get; set; }
        public string Name { get; set; }
        public string LegacyName { get; set; }
        public string YearEstablished { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string AccountManager { get; set; }
        public string Email { get; set; }
    }
}