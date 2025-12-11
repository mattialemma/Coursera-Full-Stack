// Examples of data structures
// Working with Arrays

// -_-_-_-| filter |-_-_-_-

// Returns array elements that pass the test

const nums = [0, 10, 20, 30, 40, 50];

const result = nums.filter(function (num) {
    return num > 20;
});

console.log(result);


// Same logic but with arrow function
const result2 = nums.filter(
    (num) => {
        return num > 20;
    }
)
console.log(result2);

