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
