namespace WonjuBL
{
    public class Person : IName
    {
        public string LegalName { get; set; }
        public string PreferredName { get; set; }
        public Person(string legalName, string preferredName)
        {
            LegalName = legalName;
            PreferredName = preferredName;
        }
    }
}