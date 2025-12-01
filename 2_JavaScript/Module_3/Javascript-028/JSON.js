// JSON (JavaScript Object Notation)

/*
    In JSON
    - Le stringhe con doppio apice sono necessarie per tutte le chiavi.
    - Accetta i seguenti valori primitivi: stringhe, numeri, boolean, Null
    - Accetta i seguenti valori complessi: Object e array. Non può contenere funzioni.
    - Le proprietà sono separate da virgole negli oggetti e negli array di JSON, proprio come in JavaScript.
    - Le proprietà String devono essere circondate da doppi apici. Ad esempio: "frutta", "verdura"
    Si possono usare i letterali di Object e i letterali di array, purché si seguano le regole di cui sopra.
*/


// -_-_-| Da JSON a JavaScript |-_-_-
const jsonString = JSON.stringify({
    "currencies": {
        "USD": {
            "name": "United States Dollar",
            "symbol": "$",
            "value": 1.0,
            "country": "United States"
        },
        "GBP": {
            "name": "British Pound Sterling",
            "symbol": "£",
            "value": 0.75,
            "country": "United Kingdom"
        },
        "EUR": {
            "name": "Euro",
            "symbol": "€",
            "value": 0.85,
            "country": "Eurozone"
        }
    },
    "color": "red",
    "nestedObject": {
        "color": "blue"
    }
});

// Ora posso convertire la stringa JSON in un oggetto JavaScript:
const currencyInfo = JSON.parse(jsonString);


// -_-_-| Da JavaScript a JSON |-_-_-
const currencyInfo2 = {
    USD: {
        valore: 2,
        nome: "Dollari"
    },
    GBP: {
        valore: 0.5,
        nome: "Sterlina Britannica"
    },
    EUR: {
        valore: 2.1,
        nome: "Euro"
    },
    descrizione: "testo"
};

// Ora posso convertire l'oggetto currencyInfo2 in stringa JSON:
const jsonString2 = JSON.stringify(currencyInfo);



// --- Altri esempi ---

// Oggetto JSON con due proprietà separate da ,
'{"color":"red", "nestedObject": { "color": "blue" } }' 

// Stringa JSON che codifica array:
'["one", "two", "three"]'


/*
    Cosa succede con i tipi di dati non supportati?
    Se si cerca di stringere un tipo di dati non accettato da JSON, come ad esempio:
    - Funzioni: L'operazione fallisce silenziosamente.
    - Numeri BigInt: 
    Ad esempio, il tentativo di stringare 123n darà luogo a un errore: 
    Output: Uncaught TypeError: Do not know how to serialize a BigInt.
*/

