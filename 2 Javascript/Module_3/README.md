21/11/2025 - Mattia Lemma

Gli argomenti principali che abbiamo trattato sono:
[ Valore di ritorno delle funzioni. Ricorsione. Scope delle variabili.
Immutabilità delle variabili. Programmazione funzionale (FP) e OOP. var, let, const,
Ereditarietà. Costruttori. super per costruttori e metodi. Prototype. ]


Ho elencato alcune spiegazioni aggiuntive:



- Ereditarietà e Prototype
L'ereditarietà in Javascript si basa sul prototipo dell'oggetto.
Tutti gli Object costruiti a partire dal prototipo condividono le stesse funzionalità.
Quando è necessario codificare relazioni OOP più complesse, è possibile utilizzare la parola chiave class e la sua sintassi facile da capire e da ragionare.



- FP VS OOP
Possiamo dire che il paradigma della programmazione funzionale funziona mantenendo separati i dati e le funzionalità. La sua controparte, la OOP, funziona mantenendo i dati e le funzionalità raggruppati in Object significativi.



- Interpolazione di variabili
var style = `color: ${color};`
style += `background: ${background};';

Il seguente codice crea una variabile style e aggiunge la stringa color: e la variabile color e il ;
Se la variabile color = red ho quindi:
style = 'color: red;'

+ Potrei usare anche " " al posto di ' ' ma risulterebbe meno leggibile:
style += "color: " + color + ";";

+ Possibile uso:
console.log(message, style);

+ Dove:
message = %cCiao
style = "color: red; background: blue; font-size: 20px;"

+ Ovvero: 
console.log("%cCiao", "color: red; background: blue; font-size: 20px;");



- I quattro principi fondamentali della OOP sono:
ereditarietà , incapsulamento , astrazione e polimorfismo .

_______________________________________________________________
Ho svolto esercizi guidati e autonomi per verificare le competenze acquisite.
