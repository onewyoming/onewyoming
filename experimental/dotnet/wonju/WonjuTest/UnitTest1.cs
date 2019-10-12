using System;
using Xunit;
using WonjuBL;

namespace WonjuTest
{
    public class UnitTest1
    {
        const int id = 1;
        const string name = "Kushal";
        Class1 class1 = new Class1(id: id, name: name);
        [Fact]
        public void Test1()
        {
            Assert.Equal(id, class1.Id);
            Assert.Equal(name, class1.Name);
        }
    }
}
