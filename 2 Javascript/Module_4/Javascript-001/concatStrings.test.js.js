// Introduzione ai test in Javascript

function concatStrings(strA, strB) {
    return strA + strB;
}

concatStrings("abc", "def"); // Output: "abcdef"
concatStrings(1,2) // Errore! Non concatena ma somma!

/*
    Esistono molti framework di test personalizzati disponibili in JavaScript. 
    Uno dei punti di forza di questi framework è che non si devono  usare commenti per descrivere le aspettative.
    La sintassi del test stessa diventa una documentazione delle aspettative. 

    I test sono anche richiamabili.
*/

// -_-_-| JEST Framework |-_-_-

expect(concatStrings("abc","def")).toBe("abcdef"); // Indico il risultato che mi aspetto dalla chiamata
expect(concatStrings("1","2").toBe("12"); // test correct
expect(concatStrings(1,2).toBe("12"); // test fail


// -_-_-| Refactoring |-_-_-
/*
    Modo per migliorare il codice, velocizzare il tempo di esecuzione.

    Il red-green-refactor cycle è il ciclo utile a 
    Errore -> Soluzione -> Miglioramento
    Red    ->  Green    ->  Refactoring
*/


// -_-_-| TDD |-_-_-
/*
    Il Test-Driven Development (TDD)è un approccio alla programmazione
    che si basa sulla scrittura dei test prima di scrivere il codice sorgente.

    - Scrivere un test che fallisce: 
    Prima di tutto, si scrive un test per una funzionalità che si desidera implementare.
    Questo test inizialmente fallirà perché la funzionalità non è ancora stata scritta.

    - Scrivere il codice sorgente:
    Successivamente, si scrive il codice necessario per far passare il test.
    L'obiettivo è che il codice soddisfi le aspettative definite dal test.

    - Refactoring:
    Infine, si ottimizza il codice senza cambiare il suo comportamento.
    Questo significa migliorare la leggibilità e l'efficienza del codice, assicurandosi
    che il test continui a passare.
*/

