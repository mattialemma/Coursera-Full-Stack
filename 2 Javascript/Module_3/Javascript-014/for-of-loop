// Loop for ... of (array e oggetti)

/*
    Un ciclo for of non può lavorare direttamente su un oggetto, poiché un oggetto non è iterabile.
*/

const car = {
    speed: 100,
    color: "blue"
}

// Errore
for (prop of car) {
    console.log(prop) // Output: Uncaught TypeError: car is not iterable
}

// Gli array sono iterabili
const colors = ["red", "blue", "yellow"]
for (let color of colors)
    console.log(color); // Output: red  blue  yellow

//___________________________________________________________
// Metodi integrati per convertire oggetti in array iterabili

const car2 = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car2)); // Output: ['speed', 'color']
console.log(Object.values(car2)); // Output: [200, 'red']
console.log(Object.entries); // Output; [ ['speed', 200], ['color', 'red']]

for (const key of Object.keys(car2)) {
    console.log(key, ".", car2[key])
}

//______________________________________________________________________________
// for ... of lavora sui valori, 
// mentre for ... in lavora sulle chiavi degli Object o sugli indici degli array

// Esempio 1
const car = { velocità: 100, colore: "blu" };
for (let key in car) {
    console.log(key, car[key]); // Output: velocità, colore
}

// Esempio 2
const colors = ["red", "blue", "yellow"]
for (let color of colors)
    console.log(color); // Output: red  blue  yellow

// Esempio 3
const colors2 = ["red", "blue", "yellow"]
for (let color in colors2)
    console.log(color); // Output: 0 1 2


// -_-_-_-| Altro esempio, ma con un caso interessante |-_-_-_-

const car1 = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car1);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

console.log("---| for-in è inaffidabile |---");
for (prop in sportsCar) {
    console.log(prop);
}
/*
    Output: 
    The sportsCar object: { speed: 'fast' }
    ---| for-in è inaffidabile |---
    speed
    engine
    steering

    - SPIEGAZIONE:
    i cicli for in sono inaffidabili in questo scenario
    perché iterano non solo sull'oggetto specificato,  ma anche sul suo prototipo
*/

console.log();
console.log("Iterando sull'oggetto e sul suo prototipo!");

console.log("---| for-of è affidabile |---");
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}

/*
    Output:
    ---| for-of è affidabile |---
    speed: fast
*/

// Il ciclo for-of itera sulle proprietà dell'oggetto solo quando si utilizza il metodo Object.keys()
// per restituire un array su cui eseguire il ciclo.

//-_-_-_-_-_-_-_-_-
/*
    Se utilizzi Object.create, non è obbligatorio usare Object.keys per iterare sull'oggetto creato.
    Puoi semplicemente utilizzare un ciclo for...in per iterare su tutte le proprietà,
    comprese quelle ereditate, oppure un ciclo for...of per scorrere solo le proprietà
    direttamente inizializzate nell'oggetto stesso, escludendo quelle che provengono dal prototipo. 
*/

// - - - - -| Stesso codice senza commenti | - - - - - -

const bike = {
    engine: true,
    oil: true,
    color: "red"
}

const sportBike = Object.create(bike);

sportBike.color = "blue";
console.log("The sportBike:", sportBike);

for (prop in sportBike) {
    console.log(prop);
}

for (prop of Object.keys(sportBike)) {
    console.log(prop + ":", sportBike[prop]);
}

/*
for (prop of sportBike) {
    console.log(prop); // Errore, non iterabile
}
*/
