namespace dal 
{
        [Table("Person")]
        public partial class Person: IEntity
        {
            [Required]
            public string LegalName { get; set; }
            public string PreferredName { get; set; }
            public DateTime DateOfBirth { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public IEnumerable<string> Roles { get; set; }
        }
}