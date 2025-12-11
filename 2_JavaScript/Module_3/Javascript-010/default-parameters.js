// Default parameters

// Function declaration without default parameters:
function noDefaultParams(number) {
    console.log('Result:', number * number)
}

// If I call the function without inserting parameters
noDefaultParams(); // Output: NaN (because the number is undefined by default)


// Let's now use default parameters:
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

withDefaultParams(); // Output: 100
withDefaultParams(2); // Output: 4

/*
    Default parameters allow me to build a function
    that will be executed with default argument values
    even if I don't pass any arguments to it, while being flexible enough
    to allow me to pass custom argument values and handle them accordingly.
*/

// Example with class without default parameters:

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if (this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1, 2, 3, false); // false is assigned to string1, so bool1 is undefined (i.e. false)
fail.calculate(); // Output: 'The value of bool1 is incorrect' 


// With default parameters

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if (this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

let better = new WithDefaultParams();
better.calculate(); // Output: 6
better.num1 = 1; better.num2 = 1.1; better.num3 = 0.4;
better.calculate(); // Output: 2.5
better.bool1 = false;
console.log(better.calculate()); // Output: The value of bool1 is incorrect
