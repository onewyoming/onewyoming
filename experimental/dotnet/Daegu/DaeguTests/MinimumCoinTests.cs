using Xunit;
using Daegu;
namespace DaeguTests
{
    public class MinimumCoinTests
    {
        MinimumCoin minimumCoin;
        public MinimumCoinTests() 
        {
            var coinValues = new int[]{ 1, 5, 10, 25 };
            this.minimumCoin = new MinimumCoin(CoinSet: coinValues);
        }

        [Fact]
        public void Freebie()
        {
            Assert.Equal(4, 2 + 2);
        }

        [Fact]
        public void GetTrivialCaseOfZeroCoin()
        {
            Assert.Equal(0, this.minimumCoin.getCount(0));
        }

        [Fact]
        public void GetTrivialCaseOfOneCoin()
        {
            foreach(int i in this.minimumCoin.CoinSet)
            {
                Assert.Equal(1, this.minimumCoin.getCount(i));
            }
        }
    }
}
