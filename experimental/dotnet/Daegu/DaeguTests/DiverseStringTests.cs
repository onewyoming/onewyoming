using Xunit;
using Daegu;
namespace DaeguTests
{
    public class DiverseStringTests
    {
        [Fact]
        public void Freebie()
        {
            Assert.Equal(4, 2 + 2);
        }

        [Fact]
        public void ReturnEmptyString()
        {
            var x = new DiverseString();
            var result = x.GetString(0, 0, 0);
            Assert.Equal("", result);
        }
    }
}
