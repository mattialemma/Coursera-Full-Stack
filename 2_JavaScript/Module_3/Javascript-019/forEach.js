// Esempi di strutture dati
// Lavoriamo con gli Array

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
    forEach accetta una funzione che lavorerà su ogni elemento dell'array.
    Il primo parametro della funzione è l'elemento dell'array e il secondo parametro (opzionale) è l'indice.
*/

console.log();
// Molto spesso, la funzione che il metodo forEach() deve utilizzare
// viene passata direttamente nella chiamata al metodo, come in questo caso:
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
    console.log(`${index}. ${veggie}`);
});

console.log();
// Per aumentare la leggibilità utilizziamo la funzione freccia (array function)
const veggies2 = ['onion', 'garlic', 'potato'];

veggies.forEach((veggie, index) => {
    console.log(`${index}. ${veggie}`);
});


console.log();
// Test personale
console.log("Prodotti raggruppati a due a due: ");
const listaSpesa = ['uova', 'farina', 'olio', 'kebab', 'ricotta', 'cipollotto', 'carne'];
listaSpesa.forEach(
    (element, index) => {
        console.log(`Prodotto ${index+1} chiamato ${element}.`);
        if(index%2)
            console.log("- - - - ");
    }
);

