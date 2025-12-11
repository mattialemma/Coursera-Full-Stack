// Dishes Data (custom code according to acquired skills)

console.log(); // Simple space

const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    dishData.forEach((element, index) => {
        const finalPrice = taxBoolean ? element.price * tax : element.price;
        console.log(`${index + 1}) Dish: ${element.name}, Price: $${finalPrice}`);
    });
}

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    if (typeof (taxBoolean) !== "boolean") {
        console.log("First argument must be a boolean");
        return;
    }

    getPrices(taxBoolean);

    if (typeof (guests) === "number" && (guests >= 0 && guests <= 30)) {
        const discount = guests < 5 ? 5 : 10;
        console.log(`    Discount is ${discount}.`);
    }
    else {
        console.log("The second argument must be a number between 0 and 30");
        return;
    }
}

// Call getDiscount() with sample arguments
getDiscount(true, 2);
console.log();
getDiscount(false, 10);
console.log();
getDiscount(67, 10);
