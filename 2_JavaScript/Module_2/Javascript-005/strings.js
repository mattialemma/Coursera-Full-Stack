// In JavaScript an iterable is any data type
// that can be iterated over using a for loop.

console.log("-----");

var letters = "abc";
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

console.log("-----");

var array = ['a', 'b', 'c'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("-----");

// Despite similar behavior, strings are NOT arrays. 
// Let's see an example that works with arrays but not with strings:

var string = "Hello ";
// console.log(string.pop()); // Compilation error | (string.pop is not a function)

// This means I cannot execute all array methods on strings.

var string2 = "Mattia Lemma";
console.log(string + string2);
console.log(string.concat(string2));

// -_-_-_-_-_-_ -_-_-_-_-_-_ -_-_-_-_-_-_ -_-_-_-_-_-_ -_-_-_-_-_-_

// Useful methods for strings

var greet = "Hello, ";
var place = "World";

greet.length; // Output: 7 (includes spaces)
greet.charAt(0); // Output: 'H' | Reads a single character in a string

"Wo".concat("rl").concat("d"); // Output: 'World' | .concat() Concatenates two strings
greet.concat(place); // Output: 'Hello, World'

"ho-ho-ho".indexOf('h'); // Output: 0 | Returns the position of the first match with a character
"ho-ho-ho".indexOf('o'); // Output: 1

"ho-ho-ho".lastIndexOf('o'); // Output: 7 | Finds the last match

"ho-ho-ho".split("-"); // Output: ['ho', 'ho', 'ho'] | Splits the string into an array of substrings

// Example application of .split()
const result = "Hello Mattia Lemma".split(" ");
console.log(result); // ['Hello', 'Mattia', 'Lemma']

// Split without arguments
"Mattia".split(); // Output: ["Mattia"]

// Split into individual characters
"Mattia".split(""); // Output: ["M", "a", "t", "t", "i", "a"]

greet.toUpperCase(); // Output: "HELLO, "
greet.toLowerCase(); // Output: "hello, "

// -_-_-_-_-_-_-| RECAP |_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

var string = "Mattia Lemma";

string.charAt();
string.concat();
string.indexOf();
string.lastIndexOf();
string.split();
string.toUpperCase();
string.toLowerCase();

