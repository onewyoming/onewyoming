using System;

namespace model
{
    public class Class1
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int getLength() {
            return Math.Abs(X - Y);
        }
    }
}
