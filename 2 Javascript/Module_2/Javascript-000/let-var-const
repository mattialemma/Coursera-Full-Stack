
Differenze principali tra let e var in JavaScript

-_-_-_-_-| 1. Scope |-_-_-_-_-

let → block scope: la variabile esiste solo all’interno del blocco { ... } in cui è definita.

var → function scope: la variabile esiste nell’intera funzione in cui è dichiarata (o globalmente, se fuori da qualsiasi funzione).


-_-_-_-_-| 2. Ri-dichiarazione |-_-_-_-_-

let → non permette la ri-dichiarazione nello stesso scope
→ tentare di farlo genera un ReferenceError.

var → permette la ri-dichiarazione senza errori.

- Utilizzo scorretto di let:

+ Se dichiaro una variabile con let non inizializzandola e la stampo, in output avrò undefined.
let a;
console.log(a) -> Output: undefined

+ Se la utilizzo in operazioni otterrò NaN:
let a; let b = 1; let ris = a + b; console.log(ris); -> Output: NaN (perchè undefined + 1)

-_-_-_-_-| 3. Hoisting |-_-_-_-_-

let → viene hoisted ma entra in Temporal Dead Zone (TDZ):
non può essere usata prima della dichiarazione.

var → viene hoisted e inizializzata come undefined:
può essere usata prima della dichiarazione, anche se è sconsigliato.

-_-_-_-_-| 4. Proprietà globali |-_-_-_-_-

Dichiarando una variabile globalmente:

var → diventa una proprietà dell’oggetto globale (window nel browser).

let → non viene aggiunta all’oggetto globale.


____________________________________________
-_-_-_-_-_| SPIEGAZIONE HOISTING |_-_-_-_-_-

L'hoisting è un comportamento di JavaScript in cui le dichiarazioni delle variabili e delle funzioni
vengono “spostate in alto” (hoist = sollevare) all'inizio dello scope prima che il codice venga eseguito.

console.log(x); // Output: undefined
var x = 5;

- JavaScript lo interpreta come se fosse:

var x;        // dichiarazione spostata in alto
console.log(x);
x = 5;        // assegnazione lasciata al suo posto


____________________________________________
-_-_-_-_-_| Const |_-_-_-_-_-

const piGreco = 4.141592; // Valore che non cambia, costante

La dichiarazione è obbligatoria, altrimenti -> errore di sintassi.
Non si può accedere a const prima dell'inizializzazione.
Prima inizializzo, poi utilizzo.
Non è possibile inizializzare nuovamente const con altri valori.
