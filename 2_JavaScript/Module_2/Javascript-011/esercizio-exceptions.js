// Esercizio sulle eccezioni
console.log();

function addTwoNums(numA, numB) {
    try {
        if (typeof (numA) != "number") {
            throw new ReferenceError("Il primo argomento non è un numero! ");
        }
        else if (typeof (numB) != "number") {
            throw new ReferenceError("Il secondo argomento non è un numero! ");
        }
        else {
            console.log(numA + numB);
        }
    } catch (error) {
        console.error("Error name:", error.name, "Error message:", error.message);
        // console.log("Error:", error); Funziona anche in questo semplice modo
        console.log("___________"); 
    }
}

addTwoNums(5, "5");
console.log("Questo comando viene lanciato sempre! ");
