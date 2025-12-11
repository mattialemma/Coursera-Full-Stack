// Rest operator

const top7 = [
    "Colosseum",
    "Roman Forum",
    "Vatican",
    "Trevi Fountain",
    "Pantheon",
    "Piazza Venezia",
    "Palatine Hill"
];


const [first, second, third, ...secondVisit] = top7; // secondVisit is a subarray

console.log(secondVisit); // Output: [ 'Trevi Fountain', 'Pantheon', 'Piazza Venezia', 'Palatine Hill' ]

// -_-_-_-_-_-_-_-_-_-_-| In functions |-_-_-_-_-_-_-_-_-_-_-
/*
     The rest operator is also useful in functions, in fact, 
     I can use a rest parameter to quickly multiply values. 
     
     I create a function to add tax rate to prices,
     I call it addTaxToPrices and assign it two parameters, the tax rate and the rest operator, with the purchased items.
     The function returns each item with the tax rate in the addToTaxPrices parameters;
     the rest parameter returns an array, so I can use array methods on purchased items, using the map method. 
     
     It's important to know that the rest parameter must be the last parameter in the function definition.
     This means that adding any other parameter to my addTaxToPrices function
     after the rest operator and the purchased items would generate an error.
*/

function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item);
}

// Example:
const tax = 1.22; // VAT 22%
const result = addTaxToPrices(tax, 10, 20, 50);

console.log(result); // Output: [12.2, 24.4, 61]

// In short:
// The spread operator (...) is useful in functions when you want to pass a variable number of arguments.

