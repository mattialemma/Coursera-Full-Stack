// Recursion

/*

Example of infinite recursion

function example() {
    console.log("Test:");
    example();
}

example(); // Output: RangeError: Maximum call stack size exceeded
*/

// Fibonacci sequence

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));  // Output: 5
console.log(fib(10)); // Output: 55

for (var i = 0; i <= 10; i++) {
    console.log("Number:", i, "=", fib(i)); // Fibonacci sequence from 0 to 10: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
}



