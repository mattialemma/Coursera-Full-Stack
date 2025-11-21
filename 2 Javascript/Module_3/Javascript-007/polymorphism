// Polimorfismo

/*
    Comportamenti diversi della stessa funzione a carico di oggetti diversi.
*/

function engineOn(car) {
    console.log(car.start());
}

const ferrari = {
    start: function() {
        return "Bruuuuuuum Bruuuuuuum!";
    }
}

const panda = {
    start: function() {
        return "brhm...";
    }
}

engineOn(panda);
engineOn(ferrari);

// Altro esempio

/*
    Se utilizzo il  metodo concat()  su due stringhe,
    il comportamento è esattamente lo stesso che si avrebbe se utilizzassi l'  operatore +  .
*/

"abc".concat("def"); // Output: 'abcdef'


// Posso anche usare il  metodo concat()  su due array:
["abc"].concat(["def"]); // Output: ['abc', 'def']


// Invece "+" forza gli array a diventare stringa
["abc"] + ["def"]; // Output: "abc,def"


/*
    Ciò significa che il  metodo concat()  mostra un comportamento polimorfico,
    poiché si comporta in modo diverso in base al contesto, in questo caso in base
    ai tipi di dati che gli fornisco. Tuttavia, si noti che l'utilizzo
    dell'operatore  +  con gli array non esegue una vera concatenazione.
    Invece, forza gli array in stringhe prima di unirli e gli elementi sono separati da virgole.
    Questo comportamento è diverso dal  metodo concat()  , che preserva la struttura dell'array.
*/


//______________________________________________________________
// Esempio di polimorfismo che utilizza le classi in JavaScript:

class Bird {
    useWings() {
        console.log("Flying!");
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings(); // La  parola chiave super  richiama i metodi della classe padre.
        console.log("Barely flapping!");
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//______________________________________________________________
console.log("--------"); console.log();
// Esercizio personale di test:

class Persona {
    constructor(nome,cognome){
        this.nome = nome;
        this.cognome = cognome;
    }

    saluta(nome) {
        console.log("Ciao", nome, "da", this.nome, this.cognome + "!")
    }
}

class Studente extends Persona {
    constructor(nome, cognome, matricola){
        super(nome,cognome) // Obbligatorio
        this.matricola = matricola;
    }
    
    saluta(nome) {
        super.saluta(nome);
        console.log("Sono un umile studente.");
    }
}

class Prof extends Persona {
    constructor(nome, cognome, soldi) {
        super(nome, cognome);
        this.soldi = soldi;
    }

    saluta(nome, studente) {
        super.saluta(nome);
        console.log("Io ho dei soldi:",this.soldi,"Euro, mentre", studente.nome, "no");
    }
}

var studenteMattia = new Studente("Mattia", "Lemma", "N86005170");
var profMario = new Prof("Mario", "Rossi", 1500);
studenteMattia.saluta("Mario");
profMario.saluta("Mattia", studenteMattia);
