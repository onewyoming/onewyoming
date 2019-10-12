namespace WonjuBL
{
    public class Person : IName
    {
        private string legalName;
        private string preferredName;
        public void SetLegalName(string inputLegalName) 
        {
            legalName = inputLegalName;
        }
        public void SetPreferredName(string inputPreferredName)
        {
            preferredName = inputPreferredName;
        }
        public string GetLegalName()
        {
            return legalName;
        }
        public string GetPreferredName()
        {
            return preferredName;
        }
    }
}