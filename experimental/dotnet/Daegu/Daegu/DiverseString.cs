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

            var isComplete = false;
            var iterator = 0;

            var inputDictionary = new Dictionary<string, int>();
            inputDictionary.Add("A", A);
            inputDictionary.Add("B", B);
            inputDictionary.Add("C", C);

            var myOrderedEnumerable = inputDictionary.OrderByDescending(element => element.Value);
            var myList = myOrderedEnumerable.ToList();

            while (!isComplete)
            {
                iterator++;
                if(myList.First().Value == 0 || myList[myList.Count - 1].Value <= 0 && myList[myList.Count - 2].Value <= 0) 
                {
                    if(myList.First().Value == 0)
                    {
                        break;
                    }
                }
                if (result.Length > 1 && result[result.Length - 1] == result[result.Length - 2] && myList[1].Value > 0)
                {
                    result += myList[1].Key.ToString();
                    Console.WriteLine(result);
                    var oldValue = myList[1].Value;
                    var newEntry = new KeyValuePair<string, int>(myList[1].Key, oldValue - 1);
                    myList.Remove(myList[1]);
                    myList.Add(newEntry);
                    myList = myList.OrderByDescending(element => element.Value).ToList();
                }
                else if (result.Length > 1 && result[result.Length - 1] == result[result.Length - 2] && myList[1].Value == 0)
                {
                    break;
                }
                else
                {
                    result += myList.First().Key.ToString();
                    var oldValue = myList.First().Value;
                    var newEntry = new KeyValuePair<string, int>(myList.First().Key, oldValue - 1);
                    myList.Remove(myList.First());
                    myList.Add(newEntry);
                    myList = myList.OrderByDescending(element => element.Value).ToList();
                }
            }
            return result;
        }
    }
}
