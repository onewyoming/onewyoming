using Xunit;
using Daegu;
namespace DaeguTests
{
    public class MinimumCoinTests: System.IDisposable
    {
        MinimumCoin minimumCoin;
        public MinimumCoinTests() {}

        public void Dispose()
        {
            minimumCoin.Dispose();
        }
        [Fact]
        public void Freebie()
        {
            Assert.Equal(4, 2 + 2);
        }

        [Fact]
        public void GetTrivialCaseOfZeroCoin()
        {
            var amountRequired = 0;
            var coinValues = new int[]{ 1, 5, 10, 25 };
            MinimumCoin minimumCoin = new MinimumCoin(TotalValue: amountRequired, CoinSet: coinValues);
            Assert.Equal(0, minimumCoin.getCount());
        }
    }
}
