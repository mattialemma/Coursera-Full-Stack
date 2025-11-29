
// Esempio con if else
var result = 35;

if (result >= 50) {
    console.log("You passed the exam Bro!");
}
else if (result >= 30 && result <= 40) {
    console.log("You have a second chance to pass the exam.");
}
else {
    console.log("You did not pass the exam... Bro");
}

// Esempio con else if
var place = "city"; 

switch (place) { // switch controlla valore e tipo di 'place' (comparazione stretta con ===)
    case "city":
        console.log("You live in a city.");
        break; // Se non si usa break, il codice continua ad eseguire i case successivi (fall through)
    case "suburb":
        console.log("You live in the suburbs.");
        break;
    case "village":
        console.log("You live in a village.");
        break;
    default:
        console.log("You live in a place far away from civilization.");
}

// Esempio con break in un ciclo
for (let i = 1; i <= 5; i++) { // Si utilizza let perchè i è una variabile di blocco e quindi non esiste al di fuori del ciclo (scope del ciclo)
    if (i === 3) {
        break; // Fermo il ciclo quando i è uguale a 3
    }
    console.log(i); // Stampa i numeri da 1 a 2
}

