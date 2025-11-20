// Valori di ritorno delle funzioni

// console.log è stata costruita con l'intenzione di non avere il valore di ritorno impostato esplicitamente.
console.log("Carissimo"); // Output: Carissimo e undefined

// In questo modo il valore viene visualizzato nella console di DevTools, ma viene anche restituito
function consoleLog(val) {
    console.log(val);
    return val;
}

var parola = "Carissimo!";
consoleLog(parola); // Output: Carissimo e 'Carissimo!'


// Posso creare una funzione che restituisce un Object:

function objectMaker(val) {
    return {
        prop: val
    }
}

var valore = objectMaker(20);
console.log(valore);    // Output: { prop: 20 }

var valore2 = objectMaker(Math.cbrt(27));
console.log("Radice cubica di 27: ", valore2);  // Output: Racide cubica di 27: { prop: 3 }


// Altro esempio

// Concatenamento di funzioni e restituzione di valori
let result = objectMaker(doubleIt(5));
console.log(result); // { prop: 10 }


