// Esempi di strutture dati
// Lavoriamo con gli Object

// -_-_-| Object -> Array |-_-_-

/*
    L'esempio che segue mostra come utilizzare la struttura dati Object
    per portare a termine un compito specifico. Si tratta di convertire
    un Objectin un array:
*/


const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}

const droneKeys = Object.keys(drone); // ['speed', 'color']
droneKeys.forEach((key) => {
    result.push(key, drone[key])
})
console.log(result) // Output: ['speed',100,'color','yellow']




// Test personale

const result2 = [];
const drone2 = {
    speed: 100,
    color: 'yellow'
};

// Creare drone1 con drone come prototipo
const drone1 = Object.create(drone2);
drone1.speed = 150; // Aggiungi o sovrascrivi proprietà

// Ottieni le chiavi di drone1
const drone1Keys = Object.keys(drone1); // ['speed']

// Itera su drone1Keys e copia le proprietà in result
drone1Keys.forEach((key) => {
    result2.push(key, drone1[key]);
});

console.log(result2); // Output: ['speed', 150]


// -_-_-| Mappe |-_-_-
// Una mappa può sembrare molto simile a un Object in JS.

new Map(); // Costruttore Map()
// Una Map() non ha ereditarietà, non ci sono prototipi!

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

/*
    Output:
    Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
*/

bestBoxers.get(1); // Output: 'The Champion'


// -_-_-| Gli insiemi |-_-_-
// Un insieme è una collezione di valori unici.

new Set(); // Creazione di un nuovo insieme tramite il costruttore Set()

// Accetta anche array ed elimina eventuali ripetizioni di elementi
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // Output: {'apple', 'pear', 'plum'}


// -_-_-| Altre strutture dati in JavaScript |-_-_-

/*
    Oltre alle strutture di dati integrate in JavaScript,
    è possibile costruire strutture di dati non native e personalizzate.
    Queste strutture di dati sono integrate in modo nativo in alcuni altri linguaggi di programmazione. 

    Alcune strutture di dati più avanzate che non sono state trattate includono: 

    - Queue 
    - Elenchi Linked List (singoli e doppi) 
    - Tree 
    - Grafici  

    La maggior parte  di queste strutture le ho trattate nel corso di C e C++ presso la Federico II (Informatica) e alla scuola superiore (ISS Pitagora di Pozzuoli, informatica).
*/
