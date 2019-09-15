using System;
using System.Collections.Generic;
using System.Linq;

namespace Daegu
{
    public class DiverseString
    {
        public string GetString(int A, int B, int C)
        {
            var result = "";

            Console.WriteLine($"Input contains {A} As, {B} Bs, and {C} Cs.");

            var isComplete = false;
            var iterator = 0;

            var inputDictionary = new Dictionary<string, int>();
            inputDictionary.Add("A", A);
            inputDictionary.Add("B", B);
            inputDictionary.Add("C", C);

            var myOrderedEnumerable = inputDictionary.OrderByDescending(element => element.Value);
            var myList = myOrderedEnumerable.ToList();

            foreach (var element in myOrderedEnumerable)
            {
                Console.WriteLine($"The key is {element.Key.ToString()} and the value is {element.Value.ToString()}.");
            }

            while (!isComplete)
            {
                iterator++;
                if (A < 0 || B  < 0 || C < 0)
                {
                    isComplete = true;
                }
                result += myList.First().Key.ToString();
                // myList.First().Value = 

                Console.WriteLine(iterator);
            }

            

            return result;
        }
    }
}
