# Modulo 2

Introduzione a span e div per comprendere inline e block in html, centrare un elemento e un testo.

- BLOCK
Gli elementi block in HTML includono tutti quelli che occupano l’intera larghezza e mandano il contenuto successivo a capo: parliamo quindi di <div>, dei paragrafi <p>, dei titoli da <h1> a <h6>, e degli elementi semantici come <header>, <footer>, <section>, <article>, <aside>, <nav>, <main>, <figure> e <figcaption>. Sono block anche <address>, <blockquote>, <pre>, la linea orizzontale <hr>, i moduli <form>, gli elenchi <ul> e <ol> con i loro <li>, tutte le parti della tabella come <table>, <thead>, <tbody>, <tfoot> e <tr>, oltre a <fieldset> e <legend>. Tutti questi elementi creano sempre un nuovo “blocco visivo”.

- INLINE
Gli elementi inline, invece, rimangono nella stessa riga e occupano solo lo spazio necessario. In questa categoria rientrano <span>, i link <a>, le formattazioni come <strong>, <em>, <b>, <i>, <u>, <small>, <sub>, <sup>, <mark>, <cite>, <code>, <kbd>, <samp>, <var>, <abbr>, <time> e <q>. Sono inline anche le immagini <img>, i ritorni a capo <br>, e diversi elementi di form come <label> e alcuni controlli che però si comportano come inline-block, come <input>, <select>, <textarea> e <button>. Anche <svg> è inline per impostazione predefinita.

In sintesi discorsiva: gli elementi block costruiscono la struttura verticale della pagina perché occupano tutta la larghezza e vanno a capo, mentre gli elementi inline si comportano come testo, restano nella stessa riga e vengono usati per porzioni di contenuto più piccole.

Per centrare un elemento di blocco, si utilizza margin: auto; con una larghezza definita. Per centrare il testo, si utilizza text-align: center;.

# 14/11/2025