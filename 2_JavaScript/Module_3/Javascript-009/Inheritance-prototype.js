// Inheritance and prototypes using the Object.create method

/*
    In JavaScript, the prototype is an object that can contain properties
    that can be shared by multiple objects. 
*/

var bird = { // is the prototype
    hasWings: true,
    canFly: true,
    hasfeathers: true
}

var eagle1 = Object.create(bird); // eagle1 object that has bird as prototype
console.log("eagle1:", eagle1);
console.log("Eagle1 can fly:", eagle1.canFly);
console.log("Eagle1 has wings:", eagle1.hasWings);
console.log("Eagle1 has feathers:", eagle1.hasfeathers);

var eagle2 = Object.create(bird); // eagle2 object that has bird as prototype
console.log("Eagle2 has wings:", eagle2.hasWings);

var penguin1 = Object.create(bird); // penguin1 object that has bird as prototype
penguin1.canFly = false; // Overriding the property inherited from the prototype
console.log("Penguin1 can fly:", penguin1.canFly);

console.log("Eagle1 can fly:", eagle1.canFly); // Proof that the override only affects the penguin object

/*
    It's better to use class syntax for more complex objects and inheritance
    compared to prototype syntax.

    Technically, though, class syntax is just "syntactic sugar" on top of prototypes:
    under the hood it still works based on the prototype chain.
*/
