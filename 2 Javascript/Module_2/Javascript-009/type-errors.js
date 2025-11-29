// Tipi di errori in Javascript


// 1) Errore di riferimento:
console.log(a + b); // le variabili 'a' e 'b' non sono dichiarete

// 2) Errore di sintassi:
// var parola = "Mattia; // manca la " di chiusura

// 3) Errore di tipo:
// 5.pop(); // 5 non è un array,
// "hello".pop() // "hello" non è un array ma è una stringa -> Type Error

// 4) Errore di intervallo:
// var arr = new Array(-5);

// L'errore di intervallo accade anche quando una funzione chiama sé stessa all'infinito
// (Ricorsione infinita senza condizione di stop) -> Maximum call stack size exceeded
function f() {
    f(); // ricorsione infinita
}
f();

// Altro esempio di RangeError
(10).toString(8); // Output: 12 | Converto il numero 10 nella base ottale
(10).toString(100); // Non esiste la base 100 in JavaScript -> RangeError


// 5) Errori logici:

function addNumbers(a, b) {
    return a - b; // Errore logico
}
console.log(addNumbers(5, 3)); // Output: 2

// Risulta possibile gestire e correggere gli errori logici con debugging tramite: 
// punti di interruzione, revisione logica o Peer-to-Peer Review
