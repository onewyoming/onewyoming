using Xunit;
using Daegu;
namespace DaeguTests
{
    public class MinimumCoinTests: System.IDisposable
    {
        MinimumCoin minimumCoin;
        public MinimumCoinTests() 
        {
            var amountRequired = 0;
            var coinValues = new int[]{ 1, 5, 10, 25 };
            this.minimumCoin = new MinimumCoin(TotalValue: amountRequired, CoinSet: coinValues);
        }

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
        
            Assert.Equal(0, this.minimumCoin.getCount());
        }
    }
}
