using ClassLibrary1;
using Xunit;
namespace XUnitTestProject1
{
    public class PersonTests
    {
        [Fact]
        public void EmptyConstructorGivesSomeGuid()
        {
            Person person = new ClassLibrary1.Person();
            Assert.NotEqual(person.Identifier, System.Guid.Empty);

        }
    }
}
