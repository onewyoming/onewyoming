#[macro_use]
extern crate fstrings;

fn main() {
    let greeting = "Hello";
    let greeted = "world";
    println_f!("{greeting}, {greeted}!");
}
