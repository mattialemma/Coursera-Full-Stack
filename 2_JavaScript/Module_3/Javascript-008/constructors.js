// Constructors

/*
    Javascript has a series of built-in Object types called native objects, such as:
    Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, and many others.

    - Using constructor functions
    They allow you to build instances of these built-in native objects through the new operator.
*/

// Creating a new instance of the Date Object:
var date = new Date(); // Get current date and time | Output: Thu Feb 03 2025 11:24:08 GMT+0100 (Central European Standard Time) 
date.getTime;
date.getDay;
date.getHours;
date.getTimezoneOffset;
date.getMilliseconds;
// ...

/*
    Not all built-in Objects have a constructor function.
    An example of this type of object is the built-in Math object.
*/

new Math(); // Throws an uncaught TypeError (Math is not a constructor)

/*
    SOME BUILT-IN OBJECTS HAVE CONSTRUCTORS: 
    When different instances are needed, like "Date()"

    OTHERS DON'T:
    Because they are just collections of useful functions, like "Math()."
*/


____________________________________________________________
// -_-_-_-_-| Custom constructor functions |-_-_-_-_-

function Icecream(flavor) {
    this.flavor = flavor;

    let nonProp = function () {
        console.log("I'm only called internally... ");
    }

    this.meltIt = function () { // With this, meltIt becomes a property of the object
        console.log(`The ${this.flavor} icecream has melted`);
        nonProp();
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
kiwiIcecream.meltIt(); // Output: The kiwi icecream has melted
appleIcecream.meltIt(); // Output: The apple icecream has melted
appleIcecream.nonProp(); // Output: ReferenceError: nonProp is not defined
// nonProp becomes a private function internal to the Icecream constructor


_______________________________________________________________________
// -_-_-_-_-| Performance and best practices with constructors |-_-_-_-_-


let apple = new String("apple");
apple; // --> String {"apple"}

let pear = "pear";
pear; // --> "pear"

/*
    The apple variable is an Object of type String.
    The pear variable is a string literal, i.e. a JavaScript primitive value.

    + PERFORMANCE
    The pear variable, being a primitive value,
    will always be more performant than the apple variable, which is an Object.


    In other words, if you compare new String('plum') === new String('plum'),
    you will get false, while "plum" === "plum" returns true. You get false
    when comparing Objects because it's not the values passed to the constructor
    that are compared, but rather the memory location where the objects are saved.

    Besides not using constructors to build object versions of primitives,
    it's better not to use constructors when building normal objects.
*/

_______________________________________________________________________
// -_-_-_-_-| Alternative patterns and literals |-_-_-_-_-

/*
    Instead of new Object, you should use the object literal syntax: {}.
*/

let obj = new Object();
obj.attribute = "name";

// Is less readable than:

let obj = {
    attribute: "name"
};



/*
    RegExp:
    RegExp is a built-in JavaScript object used to work with regular expressions,
    i.e. patterns used to search inside strings.
    There are two ways to create a RegExp:
*/

// With the constructor
let pattern = new RegExp("a");
"abcd".match(pattern);  // ['a', index: 0, ...]

// With regex literal (most used way)
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]

// Using the constructor with RegExp
// Dynamic regex that depends on the value of a variable (name). | Allows creating a regex using strings
let name = "Bro";
let pattern2 = new RegExp(`^${name}$`);

console.log(pattern2.test("Bro"));     // true
console.log(pattern2.test("Broo"));    // false
console.log(pattern2.test("bro"));     // false

// The literal Regex doesn't allow variables inside the slashes. | That is: 
let pattern3 = /^${name}$/; // Doesn't work



/*
    Instead of using Array, Function and RegExp constructors,
    you should use their array literal, function literal
    and template literal variants: [], () {} and /()/.

    However, when building Objects of other built-in types, you can use the constructor.
    Here are some examples:
*/
let obj1 = new Date();
let obj2 = new Error();
let obj3 = new Map();
let obj4 = new Promise();
let obj5 = new Set();
let obj6 = new WeakSet();
let obj7 = new WeakMap();

obj2.name;
obj2.message;
obj4.then;
obj7.get;
// etc...