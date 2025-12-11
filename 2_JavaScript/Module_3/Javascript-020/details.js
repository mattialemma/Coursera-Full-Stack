// Advanced use of spread and rest

// Rest in array destructuring
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4]

// Rest in a function to collect arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6

// Merging arrays with the spread operator
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // Concatenate
console.log(fruitsAndBerries); // Output: ['apple', 'pear', 'plum', 'blueberry', 'strawberry'];

// It's easy to merge Objects
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // Output:  {wings: 2, wheels: 4}

// Adding members to arrays without using push()
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); // Output: ['onion', 'parsley', 'carrot', 'beetroot'];

// From string to array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// Copying Objects to arrays
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = { ...car1 };

car1.speed = 201;
car2.speed = 150;

console.log(car2); // { Output: speed: 150, color: 'yellow' }
console.log(car1.speed, car2.speed); // Output: 201 150

// Copying arrays to another array
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2); // Output: ['apples'] 'not' ['apples','pears'];







