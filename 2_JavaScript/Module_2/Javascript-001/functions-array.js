// Functions

function addTwoNumbers(a, b) {
    return a + b;
}

var sum = addTwoNumbers(5, 10);
console.log("Sum of 5 and 10 is:", sum);

console.log("-----");

// Arrays

var fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i]);
}

console.log("-----");

// Testing a function to print array elements

function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i == 1) // Doesn't print the element at index 1
            continue;
        console.log("Element at index", i, "is", arr[i]);
    }
}

printArrayElements(fruits); // Calling the function with the fruits array

console.log("-----");

// Exercise: Letter Finder

function letterFinder(word, letter) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            console.log("Found a match at position", i);
        } else {
            console.log("No match at position", i);
        }
    }
}

letterFinder("Mattia", "i");