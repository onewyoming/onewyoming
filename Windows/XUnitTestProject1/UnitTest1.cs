using ClassLibrary1;
using Xunit;

namespace XUnitTestProject1
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            Class1 class1 = new Class1(name: "classy");
            Assert.Equal("classy", class1.name);
        }
    }
}
