namespace WonjuBL
{
    interface IName
    {
        string GetLegalName();
        void SetLegalName(string inputLegalName);
        string GetPreferredName();
        void SetPreferredName(string inputPreferredName);
    }
}