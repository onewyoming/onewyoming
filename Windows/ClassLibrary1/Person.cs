namespace ClassLibrary1
{
    public class Person
    {
        public System.Guid Identifier { get; private set; }
        public Person()
        {
            Identifier = System.Guid.NewGuid();
        }
    }
}
