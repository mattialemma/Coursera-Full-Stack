// "Advanced" part on objects

// It is possible to add new key-value pairs to existing objects using dot notation
// with the ability to add properties with different data types, including functions.

var car = {};

car.color = "red";

car.start = function () { // Adding a method to car that can only be called with car.start()
    console.log("Engine started");
}

car.roof = function () {
    console.log("Roof closed");
}

car["Drive type"] = "4x4 or rear";

console.log(car);
car.start();
car.roof();


/*
    For example, the log method that belongs to the console object,
    is only accessible through the console object:

    console.log("Dear!");

*/

