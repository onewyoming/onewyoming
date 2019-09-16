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
                foreach (var element in myList)
                {
                    if (element.Value < 0)
                    {
                        isComplete = true;
                    }
                }
                if (result.Length > 1 && result[result.Length - 1] == result[result.Length - 2])
                {
                    result += myList[1].Key.ToString();
                    Console.WriteLine(result);
                    var oldValue = myList[1].Value;
                    var newEntry = new KeyValuePair<string, int>(myList[1].Key, oldValue - 1);
                    myList.Remove(myList[1]);
                    myList.Add(newEntry);
                    Console.WriteLine($"The key is {myList[1].Key.ToString()} and the value is {myList[1].Value.ToString()}");
                    myList = myList.OrderByDescending(element => element.Value).ToList();
                }
                else
                {
                    result += myList.First().Key.ToString();
                    Console.WriteLine(result);
                    var oldValue = myList.First().Value;
                    var newEntry = new KeyValuePair<string, int>(myList.First().Key, oldValue - 1);
                    myList.Remove(myList.First());
                    myList.Add(newEntry);
                    Console.WriteLine($"The key is {myList.First().Key.ToString()} and the value is {myList.First().Value.ToString()}");
                    myList = myList.OrderByDescending(element => element.Value).ToList();
                }
            }



            return result;
        }
    }
}
