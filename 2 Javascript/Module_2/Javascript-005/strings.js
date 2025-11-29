// In JavaScript un iterabile è  qualsiasi tipo di dato
// su cui è possibile iterare  utilizzando un ciclo for.

console.log("-----");

var letters = "abc";
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

console.log("-----");

var array = ['a', 'b', 'c'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("-----");

// Nonostante il comportamento simile, le stringhe NON sono array. 
// Vediamo un esempio che funziona con gli array ma non con le stringhe:

var stringa = "Hello ";
// console.log(stringa.pop()); // Errore di compilazione | (stringa.pop is not a function)

// Ciò significa che non posso eseguire tutti i metodi array sulle stringhe.

var stringa2 = "Mattia Lemma";
console.log(stringa + stringa2);
console.log(stringa.concat(stringa2));

// -_-_-_-_-_-_ -_-_-_-_-_-_ -_-_-_-_-_-_ -_-_-_-_-_-_ -_-_-_-_-_-_

// Metodi utili per le stringhe

var greet = "Hello, ";
var place = "World";

greet.length; // Output: 7 (include spazi)
greet.charAt(0); // Output: 'H' | Legge un singolo carattere in una stringa

"Wo".concat("rl").concat("d"); // Output: 'World' | .concat() Concatena due stringhe
greet.concat(place); // Output: 'Hello, World'

"ho-ho-ho".indecOf('h'); // Output: 0 | Restituisce la posizione della prima corrispondenza con un carattere
"ho-ho-ho".indexOf('o'); // Output: 1

"ho-ho-ho".lastIndexOf('o'); // Output: 7 | Trova l'ultima corrispondenza

"ho-ho-ho".split("-"); // Output: ['ho', 'ho'. 'ho'] | Sminuzza la stringa in un array di sottostringhe

// Esempio applicazione di .split()
const risultato = "Ciao Mattia Lemma".split(" ");
console.log(risultato); // ['Ciao', 'Mattia'. 'Lemma']

// Split senza argomenti
"Mattia".split(); // Output; ["Mattia"]

// Split in singoli caratteri
"Mattia".split(""); // Output: ["M", "a", "t", "t", "i", "a"]

greet.toUpperCase(); // Output: "HELLO, "
greet.toLowerCase(); // Output: "hello, "

// -_-_-_-_-_-_-| RICAPITOLAZIONE |_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

var stringa = "Mattia Lemma";

stringa.charAt();
stringa.concat();
stringa.indexOf();
stringa.lastIndexOf();
stringa.split();
stringa.toUpperCase();
stringa.toLowerCase();

