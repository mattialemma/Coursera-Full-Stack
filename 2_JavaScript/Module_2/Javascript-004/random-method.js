/*
    The random method of the Math library allows you to generate
    a random number between 0 and 0.99.
*/

var decimal = Math.random();
console.log("A", decimal);
console.log("B", decimal * 10); // Represents numbers from 0.0 up to 9.9999...
console.log("C", decimal * 11); // Represents numbers from 0.0 up to 10.9999...
console.log("D", Math.floor(decimal * 11)); // Represents integers from 0 to 10 (inclusive)
console.log("E", Math.ceil(2.5)); // Rounds to 3 (upwards)
