using System;
using System.Collections.Generic;

namespace Daegu
{
    public class DiverseString
    {
        public string GetString(int A, int B, int C)
        {
            var sortedDictionary = new SortedDictionary<string, int>();
            sortedDictionary.Add("A", A);
            sortedDictionary.Add("B", B);
            sortedDictionary.Add("C", C);
            foreach (var element in sortedDictionary)
            {
                Console.WriteLine(element.Key);
            }
            return "";
        }
    }
}
