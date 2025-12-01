    JEST framework per i test e il mocking


    Il mocking consente di separare il codice  che si sta testando dalle relative dipendenze.
    In altre parole, è possibile utilizzare le funzionalità di mocking  per garantire che i test unitari siano autonomi.
    Ad esempio, è possibile testare  la funzionalità front-end di un'app web simulando  i dati come se provenissero da
    un server, quando in realtà provenivano dal client.
    Il mocking è particolarmente utile perché molto spesso le applicazioni web sono sviluppate da team di sviluppatori e
    alcuni di loro lavorano sul backend di  una funzionalità e altri sul frontend.

    - ESEMPIO REALE DI MOCKING -
    Prendiamo ad esempio il caso in cui il team  decida di creare una nuova funzionalità
    che  elenchi la rubrica degli  utenti dell'app sul frontend.
    I dati effettivi relativi agli utenti  per questa funzionalità proverrebbero dal server.  
    Ma cosa succederebbe se uno sviluppatore backend fosse un  po' in ritardo nello sviluppo
    della sua partedella funzionalità?  
    In tal caso, uno sviluppatore frontend si troverebbe bloccato in attesa che 
    lo sviluppatore backend completi  il ​​suo lavoro prima che il codice frontend possa essere compilato.  
     
    Con il mocking è possibile evitare questo collo di bottiglia. 


    - SNAPSHOT TEST -
    Jest consente di eseguire test snapshot.
    I test snapshot vengono utilizzati  dagli sviluppatori per verificare che
    non vi siano regressioni nel DOM delle nostre app  dopo aver apportato modifiche alla base di codice.

    In parole semplici, immagina di scattare una foto (o "snapshot") della tua applicazione in un determinato momento. Questa foto rappresenta lo stato attuale della tua interfaccia utente. 
    Quando apporti modifiche al codice, puoi confrontare la nuova versione della tua applicazione con quella foto originale per vedere se ci sono differenze indesiderate.

    - ESEMPIO REALE DI SNAPSHOT TEST -
    se hai un'app che mostra un elenco di prodotti, puoi scattare un "snapshot" di come appare l'elenco. Se successivamente cambi il modo in cui i prodotti vengono visualizzati, il test di snapshot ti dirà se l'aspetto dell'elenco è cambiato rispetto alla foto originale. Questo ti aiuta a garantire che le modifiche non abbiano introdotto errori visivi o funzionali.
