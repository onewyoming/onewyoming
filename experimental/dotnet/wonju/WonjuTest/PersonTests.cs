using System;
using Xunit;
using WonjuBL;

namespace WonjuTest
{
    public class PersonTests
    {
        const string LegalName = "Kushal Hada";
        const string PreferredName = "kus";
        WonjuBL.Person person = new WonjuBL.Person(LegalName, PreferredName);

        [Fact]
        public void TestPersonShouldCreateNotNull()
        {
            Assert.NotNull(person);
        }
        [Fact]
        public void TestPersonGetLegalName()
        {
            Assert.Equal(LegalName, person.LegalName);
        }
        [Fact]
        public void TestPersonGetPreferredName()
        {
            Assert.Equal(PreferredName, person.PreferredName);
        }
    }
}
