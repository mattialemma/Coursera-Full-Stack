RTDD, in breve, è un processo semplificato di scrittura di codice che soddisferà  alcuni requisiti. 


Il test RTDD si esegue prima dell'implementazione dei requisiti funzionali. Si scrive quindi un test per una funzionalità da compilare, prima che venga compilata.

- - - - - - - - - - - - - - - - - -

Il TDD è una metodologia di sviluppo dove prima si scrive un test che fallisce → poi si scrive il codice minimo per farlo passare → poi si migliora il codice.

Il ciclo è sempre:

RED → scrivi un test che fallisce

GREEN → scrivi il codice minimo per farlo passare

REFACTOR → ripulisci e migliora il codice

- - - - - - - - - - - - - - - - - -

- - -| Fasi | - - -

- Abbiamo questo test:
test('statusOfKeys exists', () => {
  expect(statusOfKeys).toBeDefined()
})


- Abbiamo la funzione vuota:
function statusOfKeys() {}

Se la funzione non è definita, il test fallisce con:
ReferenceError: statusOfKeys is not defined
Se fallisce siamo in fase RED.

- Scriviamo il codice minimo indispensabile per far passare il test:
function statusOfKeys() {}

Ora il test passa, siamo in fase GREEN.


