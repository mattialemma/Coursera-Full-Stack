// Function return values

// console.log was built with the intention of not having the return value explicitly set.
console.log("Dear"); // Output: Dear and undefined

// In this way the value is displayed in the DevTools console, but is also returned
function consoleLog(val) {
    console.log(val);
    return val;
}

var word = "Dear!";
consoleLog(word); // Output: Dear and 'Dear!'


// I can create a function that returns an Object:

function objectMaker(val) {
    return {
        prop: val
    }
}

var value = objectMaker(20);
console.log(value);    // Output: { prop: 20 }

var value2 = objectMaker(Math.cbrt(27));
console.log("Cube root of 27: ", value2);  // Output: Cube root of 27: { prop: 3 }


// Another example

// Function chaining and value return
let result = objectMaker(doubleIt(5));
console.log(result); // { prop: 10 }


