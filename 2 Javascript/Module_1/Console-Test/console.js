/*
  Impostazione dell'IDE Visual Studio Code per eseguire questo file.
  Installazione dell'estensione "Code Runner".
  Download di Node.js: https://nodejs.org/
  Test con console.log()
*/

console.log("Hello, Word"); 

/*  
    Se si aggiunge il carattere %c subito dopo il carattere "  iniziale,
    si può poi stilizzare l'output della console aggiungendo il carattere , 
    dopo il secondo carattere " e poi , all'interno di un'altra coppia 
    di caratteri " e ", utilizzare un codice CSS valido per stilizzare 
    le parole che si desidera visualizzare nella console. 
*/

console.log("%cHello, Word", "color: blue; font-size: 40px"); 

// Concatenazione di stringhe con il carattere +
console.log("Hello"+", "+ "Word");

// Concatenazione di stringhe con la virgola , per spaziarle automaticamente
console.log("Hello","Word");
