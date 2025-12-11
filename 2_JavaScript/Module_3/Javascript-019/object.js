// Examples of data structures
// Working with Objects

// -_-_-| Object -> Array |-_-_-

/*
    The following example shows how to use the Object data structure
    to accomplish a specific task. It involves converting
    an Object into an array:
*/


const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}

const droneKeys = Object.keys(drone); // ['speed', 'color']
droneKeys.forEach((key) => {
    result.push(key, drone[key])
})
console.log(result) // Output: ['speed',100,'color','yellow']




// Personal test

const result2 = [];
const drone2 = {
    speed: 100,
    color: 'yellow'
};

// Create drone1 with drone as prototype
const drone1 = Object.create(drone2);
drone1.speed = 150; // Add or overwrite property

// Get drone1 keys
const drone1Keys = Object.keys(drone1); // ['speed']

// Iterate on drone1Keys and copy properties to result
drone1Keys.forEach((key) => {
    result2.push(key, drone1[key]);
});

console.log(result2); // Output: ['speed', 150]


// -_-_-| Maps |-_-_-
// A Map can look very similar to an Object in JS.

new Map(); // Map() constructor
// A Map() has no inheritance, there are no prototypes!

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

/*
    Output:
    Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
*/

bestBoxers.get(1); // Output: 'The Champion'


// -_-_-| Sets |-_-_-
// A set is a collection of unique values.

new Set(); // Creating a new set through the Set() constructor

// Also accepts arrays and removes any element repetitions
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // Output: {'apple', 'pear', 'plum'}


// -_-_-| Other data structures in JavaScript |-_-_-

/*
    In addition to the data structures built into JavaScript,
    it is possible to build non-native and custom data structures.
    These data structures are natively integrated in some other programming languages. 

    Some more advanced data structures that were not covered include: 

    - Queue 
    - Linked Lists (single and double) 
    - Tree 
    - Graphs  

    Most of these structures I covered in the C and C++ course at Federico II (Computer Science) and in high school (ISS Pitagora of Pozzuoli, computer science).
*/
