// Exceptions in JavaScript
// Error handling

/*
    JavaScript errors are essentially Objects with useful accessible properties. They include:
    - name: the type of error (e.g.: TypeError, RangeError).
    - message: A description of the error.
    - stack: A stack trace showing where the error occurred.
*/

try {
    let a = b; // ReferenceError
} catch (error) {
    console.log(error.name); // Output: ReferenceError
    console.log(error.message); // Output: b is not defined
    console.log(error.stack); // Output: Stack trace
}

console.log("-_-_-_-_-_-");

// -_-_-_-| Techniques for error handling |-_-_-_-

function divide(a, b) {
    if (b == 0)
        throw new Error("Division by zero not allowed Bro! ");
    return a / b;
}

try {
    console.log(divide(5, 0));
} catch (error) {
    console.error(error.message);
    // console.error(error.name);
    // console.error(error.stack);
}