// The Math object

// Mathematical constants
Math.pi = 3.14159; // Pi constant
Math.E = 2.71828; // Euler's constant
Math.LN2 = 0.69314; // Natural logarithm of 2

// Rounding methods
Math.ceil(4.3); // Rounds up: 5
Math.floor(4.7); // Rounds down: 4
Math.round(4.5); // Rounds to nearest integer: 5 if >= .5, otherwise 4 | (5 in this case)
Math.trunc(4.9); // Removes decimal part: 4

// Methods for powers and roots
Math.pow(2, 3); // 2 raised to the power of 3: 8
Math.sqrt(16); // Square root of 16: 4
Math.cbrt(27); // Cube root of 27: 3
Math.abs(-10); // Returns the absolute value | (10 in this case)
Math.min(9, 8, 7, 6); // Returns the minimum value | (6 in this case)
Math.max(9, 8, 7, 6); // Returns the maximum value | (9 in this case)
Math.sin(); Math.cos(); Math.tan(); // etc.. Trigonometric methods

// Logarithmic methods
Math.log(x); // Returns the natural logarithm (base e) of x
Math.log2(x); // Returns the base 2 logarithm of x
Math.log10(x); // Returns the base 10 logarithm of x

/*
    It is possible to assign the results of JavaScript mathematical functions
    to variables to store and reuse the calculated values.
*/

var MyNum = Math.sqrt(16); // Calculates the square root of 16
console.log(MyNum); // Output: 4
var MyNum = Math.pow(3, 4) // Will assign the value 81 to MyNum.


