// Costruttori

/*
    Javascript ha una serie di tipi di Object incorporati chiamati oggetti nativi, come ad esempio:
    Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, e molti altri.

    - Uso delle funzioni costruttore
    Consentono di costruire istanze di questi oggetti nativi incorporati tramite l'operatore new.
*/

// Creazione di una nuova istanza dell'Objecct Date:
var data = new Date(); // Si ottiene data e ora correnti | Output: Thu Feb 03 2025 11:24:08 GMT+0100 (Central European Standard Time) 
 data.getTime;
 data.getDay;
 data.getHours;
 data.getTimezoneOffset;
 data.getMilliseconds;
// ...

/*
    Non tutti gli Object incorporati sono dotati di una funzione costruttore.
    Un esempio di questo tipo di oggetto è l'oggetto incorporato Math.
*/

new Math(); // Lancia un uncaught TypeError (Math is not a constructor)

/*
    ALCUNI OGGETTI BUILT-IN HANNO COSTRUTTORI: 
    Quando servono istanze diverse, come "Data()"

    ALTRI NO:
    Perchè sono solo raccolte di funzioni utili, come "Math()."
*/


____________________________________________________________
// -_-_-_-_-| Funzioni costruttore personalizzate |-_-_-_-_-

function Icecream(flavor) {
    this.flavor = flavor;

    let nonProp = function() {
        console.log("Vengo chiamata solo internamente... ");
    }

    this.meltIt = function() { // Con il this, meltit diventa una proprietà dell'oggetto
        console.log(`The ${this.flavor} icecream has melted`);
        nonProp();
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
kiwiIcecream.meltIt(); // Output: The kiwi icecream has melted
appleIcecream.meltIt(); // Output: The apple icecream has melted
appleIcecream.nonProp(); // Output: ReferenceError: nonProp is not defined
// nonProp diventa una funzione privata interna al costruttore Iceream


_______________________________________________________________________
// -_-_-_-_-| Prestazioni e buone pratiche con i costruttori |-_-_-_-_-


let apple = new String("apple");
apple; // --> String {"apple"}

let pear = "pear";
pear; // --> "pear"

/*
    La variabileapple è un Object di tipoString.
    La variabilepear è un letterale di stringa, cioè un valore primitivo di JavaScript.

    + PERFORMANCE
    La variabilepear, essendo un valore primitivo,
    sarà sempre più performante della variabileapple, che è un Object.


    In altre parole, se si confrontanew String('plum') === new String('plum'),
    si otterràfalse, mentre"plum" === "plum" restituisce true. Si ottiene false
    quando si confrontano gli Object perché non sono i valori passati al costruttore
    a essere confrontati, ma piuttosto la posizione di memoria in cui gli oggetti sono salvati.

    Oltre a non usare i costruttori per costruire versioni di primitive a oggetti,
    è meglio non usare i costruttori quando si costruiscono oggetti normali.
*/

_______________________________________________________________________
// -_-_-_-_-| Modelli e letterali alternativi |-_-_-_-_-

/*
    Al posto di new Object, si dovrebbe utilizzare la sintassi letterale dell'oggetto:{}.
*/

let obj = new Object();
obj.attributo = "nome";

// Risulta meno leggibile di:

let obj = {
    attributo: "nome"
};



/*
    RegExp:
    RegExp è un oggetto incorporato di JavaScript che serve per lavorare con le espressioni regolari,
    cioè pattern usati per cercare dentro le stringhe.
    Esistono due modi per creare uan RegExp:
*/

// Con il costruttore
let pattern = new RegExp("a");
"abcd".match(pattern);  // ['a', index: 0, ...]

// Con il letterale di regex (modo più usato)
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]

// Utilizzo del costruttore con RegExp
// Regex dinamica che dipende dal valore di una variabile (name). | Permette di creare una regex usando stringhe
let name = "Bro";
let pattern2 = new RegExp(`^${name}$`);

console.log(pattern2.test("Bro"));     // true
console.log(pattern2.test("Broo"));    // false
console.log(pattern2.test("bro"));     // false

// La Regex letterale non permette variabili dentro gli slash. | Ovvero: 
let pattern3 = /^${name}$/; // Non funziona



/*
    Invece di usare i costruttori Array, Function e RegExp,
    si dovrebbero usare le loro varianti di letterali di array, letterali di funzione
    e letterali di modello:[],() {} e/()/.

    Tuttavia, quando si costruiscono Object di altri tipi incorporati, si può usare il costruttore.
    Ecco alcuni esempi:
*/
let obj1 = new Date();
let obj2 = new Error();
let obj3 = new Map();
let obj4 = new Promise();
let obj5 = new Set();
let obj6 = new WeakSet();
let obj7 = new WeakMap();

obj2.name;
obj2.message;
obj4.then;
obj7.get;
// ecc...