// Examples of data structures
// Working with Arrays

// -_-_-_-| Map |-_-_-_-

/*
    This method is used to map each element of the array
    to another element of the array, based on the work done inside the function
    that is passed as a parameter to the map. 
*/

[0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10
})

// Or with arrow function
const result = [0, 10, 20, 30, 40, 50].map(num => num / 10);
console.log(result); // Output [0,1,2,3,4,5]


// Why not use a forEach in this case?
// I could do it with a forEach but I would have to create the new array myself:
const resultForEach = [];
[0, 10, 20, 30, 40, 50].forEach(num => {
    resultForEach.push(num / 10);
});

console.log(resultForEach); // Output: [0,1,2,3,4,5]
