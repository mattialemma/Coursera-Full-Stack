// Defensive programming
/*
    Defensive programming consists of assuming that all arguments a function will receive,
    are of the wrong type, the wrong value, or both.
    It is assumed that things will go wrong in order to find a solution before the problem occurs.
*/

// How would you refactor the function below?
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

// In this way:

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
