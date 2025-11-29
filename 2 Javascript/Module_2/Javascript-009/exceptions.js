// Le eccezioni in JavaScript
// Gestione degli errori

/*
    Gli errori JavScript sono essenzialmente degli Object con utili proprietà accessibili. Includono:
    - name: il tipo di errore (es: TypeError, RangeError).
    - messaggio: Una descrizione dell'errore.
    - stack: Una traccia dello stack che mostra dove si è verificato l'errore.
*/

try {
    let a = b; // ReferenceError
} catch (error) {
    console.log(error.name); // Output: ReferenceError
    console.log(error.message); // Output: b is not defined
    console.log(error.stack); // Output: Stack trace
}

console.log("-_-_-_-_-_-");

// -_-_-_-| Tecniche per la gestione degli errori |-_-_-_-

function divide(a, b) {
    if (b == 0)
        throw new Error("Divisione per zero non permessa Bro! ");
    return a / b;
}

try {
    console.log(divide(5, 0));
} catch (error) {
    console.error(error.message);
   // console.error(error.name);
   // console.error(error.stack);
}