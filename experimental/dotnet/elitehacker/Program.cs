using System;
using System.Collections.Generic;

namespace elitehacker
{
    class Program
    {
        static bool hasPair(List<int> myList, int sum)
        {
            for(int i = 0; i < myList.Count; i++)
            {
                for(int j = 0; j < myList.Count; j++)
                {
                    if (i != j)
                    {
                        if(myList[i] + myList[j] == sum)
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
        static void Main(string[] args)
        {
            // if u have a set of intergers, 
            // return  true if 2 of the interger is is add to sum. 
            // Can u make a function for it? ex: [2,7,5,2,9] sum 12 
            // will be true as 5+7=12 [1,5,3,2] sum 10 will be false
            List<int> myList = new List<int>() { 2, 7, 5, 2, 9 };
            int sum = 12;
            if(hasPair(myList, sum))
            {
                Console.WriteLine("Yes");
            } 
            else 
            {
                Console.WriteLine("No");
            }
        }
    }
}
