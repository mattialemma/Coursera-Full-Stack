// De-structuring arrays and objects

/*
    Destructuring arrays and objects is a technique in JavaScript that allows you to extract values
    from an array or object and assign them to variables in a simple and concise way.
    Imagine having a fruit basket (the array) and wanting to take only some apples and bananas.
    Instead of searching through the whole basket, you can simply say: "I want these two specific fruits".
*/


// Basic example
let { PI } = Math; // PI is 3.14159...
let { pi } = Math; // undefined (notation is case-sensitive)
PI === Math.PI; // true
PI = 1;
PI === Math.pow; // false (there's no connection between the destructured variable and the source property of the given object)

// -_-_-_-| Other examples |-_-_-_-

// Destructuring an array
const fruits = ['apple', 'banana', 'orange'];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // Output: apple
console.log(secondFruit); // Output: banana

// Destructuring an object
const car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
const { brand, model } = car;
console.log(brand); // Output: Toyota
console.log(model); // Output: Corolla

// Test with functions (works correctly)
function Person(name = "Mattia", surname = "Lemma") {
    this.name = name;
    this.surname = surname;
    this.method = function () { // Function callable from the object because it has this. and is therefore a property of the object
        console.log(this.name, this.surname);
    }
}

const p = new Person();
let { name, surname } = p;
console.log(name, surname);

const p2 = new Person("Francesco");
let { name: name1, surname: surname1 } = p2; // Renaming
console.log(name1, surname1);

p.method();
p2.method();