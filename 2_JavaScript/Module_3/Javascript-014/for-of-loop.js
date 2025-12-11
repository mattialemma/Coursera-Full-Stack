// Loop for ... of (arrays and objects)

/*
    A for of loop cannot work directly on an object, because an object is not iterable.
*/

const car = {
    speed: 100,
    color: "blue"
}

// Error
for (prop of car) {
    console.log(prop) // Output: Uncaught TypeError: car is not iterable
}

// Arrays are iterable
const colors = ["red", "blue", "yellow"]
for (let color of colors)
    console.log(color); // Output: red  blue  yellow

//___________________________________________________________
// Built-in methods to convert objects into iterable arrays

const car2 = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car2)); // Output: ['speed', 'color']
console.log(Object.values(car2)); // Output: [200, 'red']
console.log(Object.entries); // Output; [ ['speed', 200], ['color', 'red']]

for (const key of Object.keys(car2)) {
    console.log(key, ".", car2[key])
}

//______________________________________________________________________________
// for ... of works on values, 
// while for ... in works on Object keys or array indices

// Example 1
const car = { speed: 100, color: "blue" };
for (let key in car) {
    console.log(key, car[key]); // Output: speed, color
}

// Example 2
const colors = ["red", "blue", "yellow"]
for (let color of colors)
    console.log(color); // Output: red  blue  yellow

// Example 3
const colors2 = ["red", "blue", "yellow"]
for (let color in colors2)
    console.log(color); // Output: 0 1 2


// -_-_-_-| Another example, but with an interesting case |-_-_-_-

const car1 = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car1);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

console.log("---| for-in is unreliable |---");
for (prop in sportsCar) {
    console.log(prop);
}
/*
    Output: 
    The sportsCar object: { speed: 'fast' }
    ---| for-in is unreliable |---
    speed
    engine
    steering

    - EXPLANATION:
    for in loops are unreliable in this scenario
    because they iterate not only on the specified object, but also on its prototype
*/

console.log();
console.log("Iterating on the object and its prototype!");

console.log("---| for-of is reliable |---");
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}

/*
    Output:
    ---| for-of is reliable |---
    speed: fast
*/

// The for-of loop iterates on object properties only when using the Object.keys() method
// to return an array to loop on.

//-_-_-_-_-_-_-_-_-
/*
    If you use Object.create, it's not mandatory to use Object.keys to iterate on the created object.
    You can simply use a for...in loop to iterate on all properties,
    including inherited ones, or a for...of loop to scroll only through properties
    directly initialized in the object itself, excluding those coming from the prototype. 
*/

// - - - - -| Same code without comments | - - - - - -

const bike = {
    engine: true,
    oil: true,
    color: "red"
}

const sportBike = Object.create(bike);

sportBike.color = "blue";
console.log("The sportBike:", sportBike);

for (prop in sportBike) {
    console.log(prop);
}

for (prop of Object.keys(sportBike)) {
    console.log(prop + ":", sportBike[prop]);
}

/*
for (prop of sportBike) {
    console.log(prop); // Error, not iterable
}
*/
