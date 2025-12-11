// Types of errors in Javascript


// 1) Reference error:
console.log(a + b); // variables 'a' and 'b' are not declared

// 2) Syntax error:
// var word = "Mattia; // missing closing "

// 3) Type error:
// 5.pop(); // 5 is not an array,
// "hello".pop() // "hello" is not an array but a string -> Type Error

// 4) Range error:
// var arr = new Array(-5);

// Range error also happens when a function calls itself infinitely
// (Infinite recursion without stop condition) -> Maximum call stack size exceeded
function f() {
    f(); // infinite recursion
}
f();

// Another example of RangeError
(10).toString(8); // Output: 12 | Convert number 10 to octal base
(10).toString(100); // Base 100 doesn't exist in JavaScript -> RangeError


// 5) Logical errors:

function addNumbers(a, b) {
    return a - b; // Logical error
}
console.log(addNumbers(5, 3)); // Output: 2

// It is possible to manage and correct logical errors with debugging through:
// breakpoints, logic review or Peer-to-Peer Review
