/*
  Setting up Visual Studio Code IDE to run this file.
  Installing the "Code Runner" extension.
  Downloading Node.js: https://nodejs.org/
  Testing with console.log()
*/

console.log("Hello, Word");

/*  
    If you add the %c character right after the initial " character,
    you can then style the console output by adding the , character 
    after the second " character and then, inside another pair 
    of " and " characters, use valid CSS code to style 
    the words you want to display in the console. 
*/

console.log("%cHello, Word", "color: blue; font-size: 40px");

// String concatenation with the + character
console.log("Hello" + ", " + "Word");

// String concatenation with comma , to automatically space them
console.log("Hello", "Word");

// Using a variable to store a string
var name = "Mario";
console.log("Hello, " + name);
console.log("Hello,", name);
name = "Luigi"; // Variable reassignment
console.log("Hello, " + name);

// console.log() exercise with variables 
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is", petDog);
console.log("My pet cat's name is", petCat);
var catSound = "purr";
var dogSound = "wolf";
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);
catSound = "meow";
console.log(petCat, "now says", catSound);
