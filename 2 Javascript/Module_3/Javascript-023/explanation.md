
Il DOM si presenta sotto forma di  un oggetto JavaScript con  oggetti annidatiper diverse parti della pagina.
Questi oggetti hanno oggetti annidati a loro volta finché  l'intero file HTML non viene  mappato
in quella che sembra una struttura ad albero.
Il DOM è il modello del file HTML  salvato come oggetto JavaScript nella memoria del browser. 



Il DOM, o Document Object Model, è come un albero che rappresenta la struttura di un documento HTML. Immagina di avere un albero con rami e foglie: ogni parte dell'albero rappresenta un elemento della tua pagina web, come titoli, paragrafi, immagini e così via. Questo albero consente a JavaScript di interagire con il contenuto della pagina in modo dinamico, permettendo di modificare, aggiungere o rimuovere elementi mentre la pagina è in esecuzione.

Per esempio, se vuoi cambiare il testo di un titolo sulla tua pagina, puoi utilizzare JavaScript per "navigare" attraverso questo albero e trovare il titolo specifico. Una volta trovato, puoi modificarne il contenuto. Questo è simile a come un giardiniere può potare o aggiungere rami a un albero per farlo crescere in una forma desiderata. In questo modo, il DOM rende possibile la manipolazione e l'aggiornamento della tua pagina web in tempo reale!

--- SELETTORI JAVASCRIPT --- (Possiamo effettuare delle prove nella Console di DevTools)
I selettori JavaScript interagiscono con l'oggetto documento, a cui è possibile accedere  digitando la parola chiave document. Ciò restituisce la pagina web memorizzata nella memoria del browser, nota come  modello a oggetti del documento o DOM

es:
document.querySelector('p')

document.querySelector('a') // anchor tag della pagina

Esiste un selettore JavaScript che permette di ottenere tutte  le corrispondenze da una pagina web:

document.querySelectorAll('p')
// ottengo un risultato che mostra che ci sono tot (es: 2) tag di paragrafo nella pagina.

// Ricerca tramite ID
document.getElementById('heading')

// Ricerca tramite classe
document.getElementsByClassName('txt')
