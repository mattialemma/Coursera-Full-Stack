
// -_-_-_-_-_-_-_-| OOP Programming |-_-_-_-_-_-_-_-

var virtualPet = {
    sleepy: true,
    nap: function () {
        this.sleepy = false // this. refers to the sleepy property of virtualPet
    }
}

console.log(virtualPet.sleepy); // Output: true
virtualPet.nap();
console.log(virtualPet.sleepy) // Output: false


/* -_-_-_-_-_-_-_-| FP Programming |-_-_-_-_-_-_-_- 

+ FIRST-CLASS FUNCTIONS
A function in JavaScript is a value that we can:
- Pass to other functions, save in a variable, return to other functions
In JavaScript it is normal to pass a function or its invocation as an argument to another function.
*/

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1); // Returns random number between 1 and 10
}

function specificNum() { return 42 }; // Returns the number 42

var useRandom = true;

var getNumber;

if (useRandom) {
    getNumber = randomNum // getNumber becomes the randomNum function 
} else {
    getNumber = specificNum // getNumber becomes the specificNum function
}

addTwoNums(getNumber(), getNumber()) // Call the function I selected (useRandom or specificNum)

/* At lines 39 and 41:
The entire randomNum function declaration is saved in the getNumber variable 
getNumber contains the function, not the value returned by the function. */


/* + HIGHER-ORDER FUNCTIONS
This is a function that has one or both of the following characteristics:
- Accepts other functions as arguments.
- When invoked returns functions, treating them as values.
*/

getNumber1 = randomNum; // Number1 becomes the randomNum() function
getNumber2 = randomNum; // Number2 becomes the randomNum() function

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}


/* + PURE FUNCTIONS and side effects
A pure function returns the exact same result as long as it is given the same values.
*/

// Example of pure function
function addTwoNums(a, b) {
    return a + b; // E.g.: 5 + 6 will always be 11
}