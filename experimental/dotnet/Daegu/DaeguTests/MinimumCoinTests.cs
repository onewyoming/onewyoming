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
            Assert.Equal(0, this.minimumCoin.getCount());
        }

        [Fact]
        public void GetTrivialCaseOfOneCoin()
        {
            Assert.Equal(1, this.minimumCoin.CoinSet[0]);
        }
    }
}
