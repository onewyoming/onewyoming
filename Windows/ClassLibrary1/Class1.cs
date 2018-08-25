using System;

namespace ClassLibrary1
{
    public class Class1
    {
        public Guid guid { get; set; }
        public string name { get; set; }
        public Class1(string name)
        {
            this.name = name;
        }
    }
}
