using System;
using System.Collections.Generic;
using System.Linq;

namespace Daegu
{
    public class MinimumCoin
    {
        public int[] CoinSet { get; set; }

        public MinimumCoin(int[] CoinSet)
        {
            this.CoinSet = CoinSet;
        }

        public int getCount(int total)
        {
            if (this.CoinSet.Contains(total))
            {
                return 1;
            }
            return 0;
        }
    }
}
