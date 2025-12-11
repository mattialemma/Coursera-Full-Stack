// Exam: destructuring exercise

// -_-_-| 1 |-_-_-
const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
// Destructure the second product's name and price from the array
const [secondProductName, secondProductPrice] = products[1];
// Or: const [,[secondProductName, secondProductPrice]] = products;

console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);


// -_-_-| 2 |-_-_-
const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

// Destructure the author, title, and timePosted properties from the review object
const { author: autore, title, timePosted } = review; // Test renaming author property


console.log(`${autore} posted a review titled, ${title} at ${timePosted}.`);

