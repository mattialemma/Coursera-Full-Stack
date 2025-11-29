// Esempi di strutture dati
// Lavoriamo con gli Array

// -_-_-_-| filter |-_-_-_-

// Restituisce gli elementi dell'array che superano il test

const nums = [0, 10, 20, 30, 40, 50];

const result = nums.filter(function (num) {
    return num > 20;
});

console.log(result);


// Stella logica ma con la funzione freccia
const result2 = nums.filter(
    (num) => {
        return num > 20;
    }
)
console.log(result2);

