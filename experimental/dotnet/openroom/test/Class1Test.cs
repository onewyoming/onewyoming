using Class1;

namespace test {
    [TestClass]
    public class Class1Test 
    {
        private readonly Class1 _class1;
        public Class1Test() 
        {
            _class1 = new Class1();
            _class1.X = 5;
            _class1.Y = 5;
        }
        [TestMethod]
        public void IsLengthOfPointZero()
        {
            var result = _class1.getLength();
            Assert.IsEqual(result, 0);
        }
    }
}