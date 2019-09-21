using System;
using System.Collections.Generic;
using System.Linq;

namespace Daegu
{
    public class MinimumCoin: System.IDisposable
    {
        public int TotalValue { get; set; }
        public int[] CoinSet { get; set; }

        public MinimumCoin(int TotalValue, int[] CoinSet)
        {
            this.TotalValue = TotalValue;
            this.CoinSet = CoinSet;
        }

        public void Dispose()
        {
            // do nothing because I am managed code
        }

        public int getCount()
        {

            return 0;
        }
    }
}
