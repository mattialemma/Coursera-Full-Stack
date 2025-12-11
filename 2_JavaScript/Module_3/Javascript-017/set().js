// Set()
// Set() does not insert duplicates

const house1 = 'red';
const house2 = 'blue';
const house3 = 'red';

const houses = new Set(); // Set()

houses.add(house1).add(house2).add(house3);
console.log(houses); // Output: Set(2) {'red','blue'}

// Deleting an element in a Set()
houses.delete(house1);
console.log(houses); // Output: Set(1) {'blue'}
