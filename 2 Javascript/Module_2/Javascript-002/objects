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

// Posso accedere alle proprieta' anche usando le parentesi quadre
console.log("Accessing properties using bracket notation:");
console.log("Name:", storeManager["name"]);
storeManager["experience"] = 10; // Adding another property using bracket notation
storeManager["age"] = 40; // Updating age using bracket notation
console.log("-----");
console.log("After updating age and adding experience:");
console.log(storeManager); // Printing the final state of the object

console.log("-----");

// Con le parentesti quadre posso aggiungere spazi nei nomi delle proprieta'
storeManager["years of service"] = 15;
console.log("After adding 'years of service' property:");
console.log(storeManager); 

console.log("-----");

// Con le parentesi quadre posso aggiungere numeri come nomi delle proprieta'
storeManager[2024] = "Current Year";
console.log("After adding '2024' property:");
console.log(storeManager);

console.log("-----");

// Esempio di iterazione sulle proprieta' di un oggetto usando un array di chiavi
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]) // L'operatore [] e' utile qui per accedere dinamicamente alle proprieta'
}

console.log("-----");

console.log(drone);