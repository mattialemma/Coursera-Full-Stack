# 1️⃣ Introduction to Front-End Development

**Data completamento**: 16/11/2025  
**Stato**: ✅ Completato

---

## 📖 Descrizione del Modulo

Questo modulo introduce i fondamenti dello sviluppo Front-End, coprendo HTML5, CSS3, Bootstrap e i concetti base di React.

### Argomenti trattati:
- HTML5 e struttura delle pagine web
- Document Object Model (DOM)
- CSS3 e box model
- Accessibilità web
- Bootstrap e grid system
- Framework CSS moderni
- Introduzione a React
- Bundler e Lazy Loading
- Librerie JavaScript comuni

---

## 📁 Contenuto del Modulo

### Module_2 - HTML5 e CSS
**Data**: 15/11/2025

Fondamenti di HTML e CSS per la creazione di pagine web.

**Argomenti**:
- **Introduzione a HTML**
  - Ruolo di HTML nel browser
  - Tag HTML e sintassi corretta
  - Struttura di una pagina HTML
  - Documenti HTML di base
  - Collegamenti tra documenti (attributo `href`)

- **Document Object Model (DOM)**
  - Funzione del DOM
  - Generazione del DOM da pagina HTML
  - Interazione con il DOM tramite JavaScript
  - Aggiornamento contenuti e gestione eventi

- **Accessibilità Web e CSS**
  - Accessibilità web e tecnologie assistive
  - Tecniche per migliorare l'accessibilità
  - Regole CSS per stilizzare elementi HTML
  - Box model

**Esercizi**: 4 cartelle (HTML-CSS-001 → HTML-CSS-004)

---

### Module_3 - Bootstrap e React
**Data**: 16/11/2025

Introduzione a Bootstrap, framework CSS e concetti base di React.

**Argomenti**:
- **Bootstrap**
  - Basi di Bootstrap
  - Sistema di griglia responsivo
  - Componenti predefiniti
  - Infix (breakpoint responsivi): `col-sm-6`, `text-md-center`, `d-lg-none`
  - Modifier (variazioni di stile): `btn-primary`, `btn-lg`, `alert-danger`, `card-body`
  - [Documentazione Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

- **Framework CSS Moderni**
  - **Bootstrap**: Componenti predefiniti, grid system, design rapido
  - **Foundation**: Componenti avanzati, progetti complessi
  - **Pure.css**: Minimalista, leggero, performance
  - **Tailwind CSS**: Utility-first, design personalizzato
  - **UIKit**: Leggero, design pulito e modulare
  - **MVP.css**: Prototipazione rapida senza classi CSS

- **React**
  - React è una **libreria** (non un framework)
  - Funzionamento del DOM virtuale
  - Componenti e rendering

- **Concetti Avanzati**
  - **Dipendenze**: Pacchetti esterni (React, Tailwind, Bootstrap)
  - **Bundler**: Strumenti come Vite, Webpack, Parcel per ottimizzare il codice
  - **Lazy Loading**: Caricamento on-demand per migliorare performance

- **Librerie JavaScript con React**
  - **Lodash**: Funzioni utility (ordinamento, arrotondamento)
  - **Luxon**: Gestione date e orari
  - **Redux**: Gestione stato applicazioni
  - **Axios**: Richieste HTTP semplificate
  - **Jest**: Testing automatizzato

**Esercizi**: 3 cartelle (HTML-BOOTSTRAP-001 → HTML-BOOTSTRAP-003)

---

### Module_4 - Bootstrap Pratico
**Data**: 16/11/2025

Test pratici con Bootstrap per applicare i concetti appresi.

**Argomenti**:
- Grid system per layout responsive
- Container, row e col
- Classi di utilità (spaziature, colori, display)
- Componenti Bootstrap:
  - Navbar
  - Card
  - Button
  - Form
- Principi base del responsive design
- Creazione interfacce moderne e adattabili

**Esercizi**: 1 progetto completo (HTML-BOOTSTRAP-EXERCISE-001)

---

## 🛠️ Concetti Chiave Appresi

### HTML5 - Struttura Base
```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titolo Pagina</title>
</head>
<body>
  <h1>Benvenuto</h1>
  <a href="pagina.html">Link</a>
</body>
</html>
```

### CSS - Box Model
```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

### Bootstrap - Grid System
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Colonna 1</div>
    <div class="col-md-6">Colonna 2</div>
  </div>
</div>
```

### Bootstrap - Componenti
```html
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand</a>
</nav>

<!-- Card -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Titolo</h5>
    <p class="card-text">Testo della card</p>
    <a href="#" class="btn btn-primary">Azione</a>
  </div>
</div>
```

---

## 🎨 Framework CSS - Confronto

| Framework | Tipo | Ideale per |
|-----------|------|------------|
| **Bootstrap** | Component-based | Design rapido e responsivo |
| **Foundation** | Component-based | Progetti complessi e grandi |
| **Pure.css** | Minimalista | Performance e caricamento veloce |
| **Tailwind CSS** | Utility-first | Design altamente personalizzato |
| **UIKit** | Leggero | Aspetto pulito e modulare |
| **MVP.css** | Classless | Prototipazione rapida |

---

## ⚛️ React e Librerie

### React
- **Libreria** JavaScript (non framework)
- DOM virtuale per performance
- Componenti riutilizzabili

### Librerie Comuni
- **Lodash**: Utility functions
- **Luxon**: Date e orari
- **Redux**: State management
- **Axios**: HTTP requests
- **Jest**: Testing

---

## 🚀 Bundler e Ottimizzazione

### Bundler
Strumenti che raggruppano e ottimizzano i file del progetto:
- **Vite**: Veloce, moderno
- **Webpack**: Potente, configurabile
- **Parcel**: Zero-config

### Lazy Loading
Tecnica per caricare codice solo quando necessario:
- Riduce tempo di caricamento iniziale
- Migliora performance
- Carica meno codice all'avvio

---

## ♿ Accessibilità Web

### Tecnologie Assistive
- Screen readers
- Navigazione da tastiera
- Contrasto colori

### Best Practices
- Usare tag semantici (`<nav>`, `<main>`, `<article>`)
- Attributi `alt` per immagini
- Label per form
- ARIA attributes quando necessario

---

## 📚 Risorse

- [MDN Web Docs](https://developer.mozilla.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [W3C Accessibility Guidelines](https://www.w3.org/WAI/)
- [React Documentation](https://react.dev/)

---

## ✅ Competenze Acquisite

### Module 2
- ✅ Struttura HTML5
- ✅ Tag e sintassi HTML
- ✅ Collegamenti tra documenti
- ✅ Document Object Model (DOM)
- ✅ Interazione DOM con JavaScript
- ✅ Accessibilità web
- ✅ CSS e box model

### Module 3
- ✅ Bootstrap e componenti
- ✅ Grid system responsivo
- ✅ Infix e modifier Bootstrap
- ✅ Framework CSS moderni
- ✅ React (libreria vs framework)
- ✅ Dipendenze e bundler
- ✅ Lazy loading
- ✅ Librerie JavaScript (Lodash, Redux, Axios, Jest)

### Module 4
- ✅ Grid system Bootstrap
- ✅ Container, row, col
- ✅ Classi utility Bootstrap
- ✅ Componenti (navbar, card, button, form)
- ✅ Responsive design
- ✅ Interfacce moderne e adattabili

---

## 📝 Note Personali

Ho completato con successo questo modulo introduttivo, acquisendo solide basi in HTML, CSS e Bootstrap. Gli esercizi pratici mi hanno permesso di comprendere la struttura modulare di Bootstrap e di creare interfacce responsive.

Totale esercizi completati: **8 progetti pratici**.
