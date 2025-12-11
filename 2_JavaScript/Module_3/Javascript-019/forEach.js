// Examples of data structures
// Working with Arrays

// -_-_-_-| forEach |-_-_-_-

const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

/*
    Output:
    0. kiwi
    1. mango
    2. apple
    3. pear
*/

/*
    forEach accepts a function that will work on each element of the array.
    The first parameter of the function is the array element and the second parameter (optional) is the index.
*/

console.log();
// Very often, the function that the forEach() method should use
// is passed directly in the method call, as in this case:
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
    console.log(`${index}. ${veggie}`);
});

console.log();
// To increase readability we use the arrow function
const veggies2 = ['onion', 'garlic', 'potato'];

veggies.forEach((veggie, index) => {
    console.log(`${index}. ${veggie}`);
});


console.log();
// Personal test
console.log("Products grouped two by two: ");
const shoppingList = ['eggs', 'flour', 'oil', 'kebab', 'ricotta', 'spring onion', 'meat'];
shoppingList.forEach(
    (element, index) => {
        console.log(`Product ${index + 1} called ${element}.`);
        if (index % 2)
            console.log("- - - - ");
    }
);

