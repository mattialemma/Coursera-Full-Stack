
// Operatori in Javascript

val1 = 5 + 3; // Addizione
val2 = 10 - 2; // Sottrazione
val3 = 4 * 2; // Moltiplicazione
val4 = 16 / 4; // Divisione
val5 = 17 % 3; // Modulo
val6 = 2 ** 3; // Esponenziazione

val1 < val2; // Minore di
val3 <= val4; // Minore o uguale a
val5 > val6; // Maggiore di
val1 >= val2; // Maggiore o uguale a
val3 == val4; // Uguale a
val5 != val6; // Diverso da
val1 === val2; // Uguale in valore e tipo (uguaglianza stretta)
val3 !== val4; // Diverso in valore o tipo (disuguaglianza stretta)

val1 && val2; // AND logico
val3 || val4; // OR logico
!val5; // NOT logico

val1++; // Incremento di 1
val2--; // Decremento di 1

val3 += 2; // Aggiunge 2 a val3
val4 -= 2; // Sottrae 2 da val4
val5 *= 2; // Moltiplica val5 per 2
val6 /= 2; // Divide val6 per 2
val1 %= 2; // Assegna a val1 il resto della divisione per 2
val2 **= 2; // Eleva val2 alla potenza di 2

val3 = (val4 + val5) * val6; // Uso delle parentesi per modificare l'ordine delle operazioni


// CONSOLE.LOG IN JAVASCRIPT con operazioni

console.log(((2+2-1)*3)/2); // Stampa il risultato di 2 + 2 nella console
console.log(3>1); // Stampa il risultato della comparazione 3 > 1 nella console
console.log(10 == 10); // Stampa il risultato della comparazione 10 == 10 nella console

a = 5;
console.log(a>2 && a>0); // Stampa il risultato della comparazione a>2 AND a>0 nella console
console.log(a>=1 || a< 10); // Stampa il risultato della comparazione a<2 OR a>0 nella console

vero = true;
console.log(!vero); // Stampa il risultato della negazione di vero nella console

console.log(5 === "5") // Stampa il risultato della comparazione stretta 5 === "5" nella console
console.log(5 !== "5") 

"inter"+"net" // = "internet" // Concatenazione di stringhe con l'operatore +
365 + "days" // = "365days" // Concatenazione di numero e stringa con l'operatore +

/*
    Il processo di conversione dei valori in JavaScript viene definito "coercizione".
    JavaScriptconverte un valore numerico in un valore stringa,
    in modo da poter eseguire l'Operator+ su tipi di dati diversi.

*/

1 + "2" // = "12" // Il numero 1 viene convertito in stringa e concatenato con "2"

// Esempio di utilizzo dell'operatore += per concatenare stringhe
var longString = "";
longString += "This ";
longString += "is ";
longString += "a ";
longString += "long ";
longString += "string.";
console.log(longString); // Stampa "This is a long string."

// Associatività degli operatori
var result = 10 - 5 + 2; // Associatività da sinistra a destra
var result2 = 10; // Associatività da destra a sinistra
5 > 3 > 1; // Associatività da sinistra a destra
