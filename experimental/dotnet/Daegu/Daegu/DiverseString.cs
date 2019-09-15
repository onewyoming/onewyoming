using System;
using System.Collections.Generic;

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

            foreach (var element in inputDictionary)
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
                A--;
                B--;
                C--;

                Console.WriteLine(iterator);
            }

            

            return result;
        }
    }
}
