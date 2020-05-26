using System;
using System.Collections.Generic;
using System.Linq;

namespace Daegu
{
    public class MinimumCoin
    {
        public List<int> CoinSet { get; set; }

        public MinimumCoin(List<int> CoinSet)
        {
            this.CoinSet = CoinSet;
        }

        private static IEnumerable<IEnumerable<T>> SubSetsOf<T>(IEnumerable<T> source)
        {
            if (!source.Any())
                return Enumerable.Repeat(Enumerable.Empty<T>(), 1);

            var element = source.Take(1);

            var haveNots = SubSetsOf(source.Skip(1));
            var haves = haveNots.Select(set => element.Concat(set));

            return haves.Concat(haveNots);
        }

        private int getCountInternal(int total, List<int> repeatedList)
        {
            int currentCount = int.MaxValue;
            var x = SubSetsOf<int>(repeatedList);
            foreach (var y in x)
            {
                int sum = y.Sum();
                if (sum == total)
                {
                    if (currentCount > y.Count())
                    {
                        currentCount = y.Count();
                    }
                }
            }
            return currentCount;
        }

        public int getCount(int total)
        {
            if (this.CoinSet.Contains(total))
            {
                return 1;
            }
            else if (this.CoinSet.Min() > total)
            {
                return 0;
            }
            else
            {
                List<int> repeatedList = new List<int>();
                int repeatFactor = 10;
                for (int i = 0; i < repeatFactor; i++) {
                    foreach (int x in this.CoinSet) 
                    {
                        repeatedList.Add(x);
                    }
                }
                return this.getCountInternal(total, repeatedList);
            }
        }
    }
}
