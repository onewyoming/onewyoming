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

        [Fact]
        public void ReturnASingleA()
        {
            var x = new DiverseString();
            var result = x.GetString(1, 0, 0);
            Assert.Equal("A", result);
        }

        [Fact]
        public void ReturnASingleB()
        {
            var x = new DiverseString();
            var result = x.GetString(0, 1, 0);
            Assert.Equal("B", result);
        }

        [Fact]
        public void ReturnASingleC()
        {
            var x = new DiverseString();
            var result = x.GetString(0, 0, 1);
            Assert.Equal("C", result);
        }

        [Fact]
        public void ReturnCCBCC()
        {
            var x = new DiverseString();
            var result = x.GetString(0, 1, 8);
            Assert.Equal("CCBCC", result);
        }

        [Fact]
        public void ReturnPat()
        {
            var x = new DiverseString();
            var result = x.GetString(4,5,6);
            Assert.Equal(15, result.Length);
        }
    }
}
