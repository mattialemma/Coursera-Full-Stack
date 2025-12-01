// Operatore di rest

const top7 = [
    "Colosseum",
    "Roman Forum",
    "Vatican",
    "Trevi Fountain",
    "Pantheon",
    "Piazza Venezia",
    "Palatine Hill"
];


const [first, second, third, ...secondVisit] = top7; // secondVisit è un sottoarray

console.log(secondVisit); // Output: [ 'Trevi Fountain', 'Pantheon', 'Piazza Venezia', 'Palatine Hill' ]

// -_-_-_-_-_-_-_-_-_-_-| Nelle funzioni |-_-_-_-_-_-_-_-_-_-_-
/*
     L'operatore rest è utile anche nelle funzioni, infatti, 
     posso usare un parametro rest per moltiplicare rapidamente i valori. 
     
     Creo una funzione per aggiungere l'aliquota fiscale ai prezzi,
     la chiamo  addTaxToPrices e le assegna due parametri,l'aliquota fiscale e l'operatore rest,con gli articoli acquistati.
     La funzione restituisce ogni articolo con l'aliquota fiscale nei parametri addToTaxPrices;
     il parametro rest mi restituisce un array, quindi  posso usare metodi array sugli articoli acquistati,usando il metodo map. 
     
     È importante sapere che il parametro rest  deve essere l'ultimo parametro nella definizione della funzione.
     Ciò significa che aggiungere qualsiasi altro parametro alla mia funzione addTaxToPrices
     dopo l'operatore rest e gli articoli acquistati genererebbe un errore.
*/

function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item);
}

// Esempio:
const tax = 1.22; // IVA 22%
const ris = addTaxToPrices(tax, 10, 20, 50);

console.log(ris); // Output: [12.2, 24.4, 61]

// In breve:
// Lo spread operator (...) è utile nelle funzioni quando vuoi passare un numero variabile di argomenti.

