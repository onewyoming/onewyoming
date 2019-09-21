using Xunit;
using Daegu;
namespace DaeguTests
{
    public class MinimumCoinTests
    {
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
            MinimumCoin minimumCoin = new MinimumCoin();
            Assert.Equal(0, minimumCoin.getCount());
        }
    }
}
