// Programmazione difensiva
/*
    La programmazione difensiva consiste nel supporre che tutti gli argomenti che una funzione riceverà,
    siano del tipo sbagliato, del valore sbagliato o entrambi.
    Si presuppone che le cose vadano male in modo da trovare una soluzione prima che il problema si verifichi.
*/

// Come rifattorizzeresti la funzione qui sotto?
/*
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}
    */

// In questo modo:

function letterFinder(word, match) {
    var condition1 = typeof (word) == "string" && word.length >= 2;
    var condition2 = typeof (match) == "string" && match.length == 1;

    if (condition1 && condition2) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log("Found the", match, "at", i, ".");
            } else {
                console.log("--- No match found at", i, ".");
            }
        }
    } else {
        console.log("Please pass the correct arguments to the function! ");
    }
}

letterFinder(4, "onion");
letterFinder("dogs", "o");
