// Objects

var storeManager = { // Object representing a store manager
    name: "Alice Johnson", // Property: name
    age: 35,
    store: "Tech Gadgets",
}

console.log("Store Manager Details:");
console.log("Name:", storeManager.name); // Accessing object property using dot notation
console.log("Age:", storeManager.age);
console.log("Store:", storeManager.store);

storeManager.age += 20; // Updating the age property
console.log("Updated Age of Store Manager:", storeManager.age);

console.log("-----");

console.log(storeManager); // Printing the entire object

console.log("-----");

storeManager.addPropriety = "New Value"; // Adding a new property to the object
console.log("After adding a new property:");
console.log(storeManager); // Printing the updated object

// I can also access properties using square brackets
console.log("Accessing properties using bracket notation:");
console.log("Name:", storeManager["name"]);
storeManager["experience"] = 10; // Adding another property using bracket notation
storeManager["age"] = 40; // Updating age using bracket notation
console.log("-----");
console.log("After updating age and adding experience:");
console.log(storeManager); // Printing the final state of the object

console.log("-----");

// With square brackets I can add spaces in property names
storeManager["years of service"] = 15;
console.log("After adding 'years of service' property:");
console.log(storeManager);

console.log("-----");

// With square brackets I can add numbers as property names
storeManager[2024] = "Current Year";
console.log("After adding '2024' property:");
console.log(storeManager);

console.log("-----");

// Example of iterating over object properties using an array of keys
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]) // The [] operator is useful here to dynamically access properties
}

console.log("-----");

console.log(drone);