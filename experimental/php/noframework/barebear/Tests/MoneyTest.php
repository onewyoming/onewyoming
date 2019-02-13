<?php
declare(strict_types=1);

require_once 'vendor/autoload.php';
class TestingOne extends PHPUnit\Framework\TestCase  
{

    public function testTrue()
    {
        $this->assertEquals(TRUE, BareBears\Money::returnsTrue());
    }

    public function testFalse()
    {
        $this->assertEquals(FALSE, !BareBears\Money::returnsTrue());
    }
}

class TestingTwo extends PHPUnit\Framework\TestCase  
{

    public function testTrue()  
    {  
        $this->assertEquals(TRUE, BareBears\Money::returnsTrue());  
    }

    public function testFalse()
    {
        $this->assertEquals(FALSE, !BareBears\Money::returnsTrue());
    }
}  