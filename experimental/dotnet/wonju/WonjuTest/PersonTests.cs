using System;
using Xunit;
using WonjuBL;

namespace WonjuTest
{
    public class PersonTests
    {
        const string LegalName = "Kushal Hada";
        const string PreferredName = "kus";
        [Fact]
        public void TestPersonShouldCreateNotNull()
        {
            WonjuBL.Person person = new WonjuBL.Person();
            Assert.NotNull(person);
        }
        [Fact]
        public void TestPersonSetGetLegalName()
        {
            WonjuBL.Person person = new WonjuBL.Person();
            person.SetLegalName(LegalName);
            Assert.Equal(LegalName, person.GetLegalName());
        }
        [Fact]
        public void TestPersonSetGetPreferredName()
        {
            WonjuBL.Person person = new WonjuBL.Person();
            person.SetPreferredName(PreferredName);
            Assert.Equal(PreferredName, person.GetPreferredName());
        }
    }
}
