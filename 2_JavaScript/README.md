# 2️⃣ Programming with JavaScript

**Data completamento**: 30/11/2025  
**Stato**: ✅ Completato

---

## 📖 Descrizione del Modulo

Questo modulo copre i fondamenti della programmazione con JavaScript, dalla sintassi base fino ai concetti avanzati di programmazione funzionale, OOP, DOM manipulation e testing.

### Argomenti trattati:
- Sintassi base e logica condizionale
- Funzioni, array e oggetti
- Programmazione funzionale (FP) vs OOP
- Ereditarietà e prototipi
- Destrutturazione e template literals
- Manipolazione del DOM
- Node.js, npm e testing con Jest
- TDD (Test-Driven Development)

---

## 📁 Contenuto del Modulo

### Module_1 - Introduzione a JavaScript
**Data**: 17/11/2025

Fondamenti di JavaScript con test su Visual Studio Code e DevTools di Chrome.

**Argomenti**:
- `console.log` e strumenti DevTools
- Logica condizionale (if/else)
- Strutture switch
- Variabili
- Loop (cicli)
- Regole di sintassi fondamentali

**Esercizi**: 6 cartelle (Javascript-001 → Javascript-005, Console-Test)

---

### Module_2 - Funzioni, Array e Oggetti
**Data**: 19/11/2025

Concetti fondamentali su funzioni, array, oggetti e gestione errori.

**Argomenti**:
- Funzioni (blocchi di codice riutilizzabile)
- Array (oggetti con metodi specifici)
- Oggetti in JavaScript
- Stringhe (immutabilità e differenze con array)
- Oggetto Math (arrotondamento, numeri casuali)
- Gestione eccezioni ed errori
- `let`, `var`, `const`
- `NaN` (Not a Number)
- Programmazione difensiva

**Esercizi**: 13 cartelle (Javascript-000 → Javascript-012)

---

### Module_3 - Programmazione Avanzata
**Data**: 28/11/2025

Concetti avanzati di programmazione funzionale, OOP e manipolazione DOM.

**Argomenti**:
- Valore di ritorno delle funzioni
- Ricorsione
- Scope delle variabili
- Immutabilità
- **Programmazione Funzionale (FP) vs OOP**
  - FP: dati e funzionalità separati
  - OOP: dati e funzionalità raggruppati in oggetti
- **Ereditarietà e Prototype**
  - Tutti gli oggetti condividono il prototipo
  - Parola chiave `class` per OOP complesse
  - I 4 principi OOP: ereditarietà, incapsulamento, astrazione, polimorfismo
- Costruttori e `super`
- **Destrutturazione** (array e oggetti)
- Convertire oggetti in array
- **Template literals** (interpolazione variabili)
- Arrow functions
- Operatore spread (`...`)
- Operatore rest
- Moduli ES6
- **Manipolazione del DOM**
- Gestione eventi (event handlers)
- **JSON** e scambio dati

**Esercizi**: 27 cartelle (Javascript-001 → Javascript-028)

**Note aggiuntive**:
- Interpolazione variabili: `` `color: ${color};` ``
- Styling console: `console.log("%cCiao", "color: red; background: blue;")`

---

### Module_4 - Testing e Node.js
**Data**: 30/11/2025

Testing, Node.js, npm e best practices.

**Argomenti**:
- **Node.js**: ambiente runtime JavaScript (motore V8)
- **npm** (Node Package Manager): gestione pacchetti
- Moduli npm (React, Webpack, Bootstrap, Angular)
- `package.json`: informazioni progetto e dipendenze
- **Jest**: framework di testing
- **TDD** (Test-Driven Development)
- Refactoring
- **Tipi di testing**:
  - Testing unitario (unit testing)
  - Testing di integrazione
  - Testing E2E (end-to-end)
- Esercizi pratici integrati

**Esercizi**: 6 cartelle (Javascript-001 → Javascript-006)

---

## 🛠️ Concetti Chiave Appresi

### Variabili
```javascript
let variabile = "riassegnabile";    // Preferibile
const costante = "immutabile";      // Usa quando possibile
var vecchioStile = "evitare";       // Non usare
```

### Funzioni
```javascript
// Funzione classica
function saluta(nome) {
  return `Ciao, ${nome}!`;
}

// Arrow function
const saluta = (nome) => `Ciao, ${nome}!`;
```

### Destrutturazione
```javascript
// Array
const [primo, secondo] = [1, 2, 3];

// Oggetti
const { nome, età } = { nome: "Mattia", età: 25 };
```

### Template Literals
```javascript
const color = "red";
const style = `color: ${color}; background: blue;`;
// Risultato: "color: red; background: blue;"
```

### Spread Operator
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]
```

### DOM Manipulation
```javascript
const elemento = document.getElementById("myId");
elemento.textContent = "Nuovo testo";
elemento.addEventListener("click", (e) => {
  console.log("Cliccato!");
});
```

---

## 🎯 FP vs OOP

### Programmazione Funzionale (FP)
- **Dati e funzionalità separati**
- Funzioni pure senza side effects
- Immutabilità dei dati

### Programmazione Orientata agli Oggetti (OOP)
- **Dati e funzionalità raggruppati** in oggetti
- 4 principi fondamentali:
  1. **Ereditarietà** - Riutilizzo codice
  2. **Incapsulamento** - Nascondere dettagli interni
  3. **Astrazione** - Semplificare complessità
  4. **Polimorfismo** - Comportamenti diversi con stessa interfaccia

---

## 🧪 Testing con Jest

### Tipi di Testing
1. **Testing Unitario**: Testa singole funzioni/componenti
2. **Testing di Integrazione**: Testa interazione tra moduli
3. **Testing E2E**: Testa l'intera applicazione dall'inizio alla fine

### TDD (Test-Driven Development)
1. Scrivi il test (fallisce)
2. Scrivi il codice minimo per passare il test
3. Refactoring del codice

---

## 🔧 Node.js e npm

### Node.js
Ambiente runtime JavaScript basato su motore V8 di Chrome. Permette di eseguire JavaScript fuori dal browser.

### npm (Node Package Manager)
Gestore di pacchetti per installare librerie e framework.

```bash
npm install <pacchetto>    # Installa pacchetto
npm init                   # Crea package.json
```

### package.json
Contiene:
- Informazioni sul progetto
- Lista dipendenze
- Script di automazione

**Esempi di librerie npm**: React, Webpack, Bootstrap, Angular Core

---

## 📚 Risorse

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Jest Documentation](https://jestjs.io/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

## ✅ Competenze Acquisite

### Module 1
- ✅ Sintassi base JavaScript
- ✅ Console e DevTools
- ✅ Logica condizionale e switch
- ✅ Variabili e loop

### Module 2
- ✅ Funzioni riutilizzabili
- ✅ Array e metodi
- ✅ Oggetti in JavaScript
- ✅ Gestione errori ed eccezioni
- ✅ Oggetto Math
- ✅ `let`, `var`, `const`

### Module 3
- ✅ Ricorsione e scope
- ✅ FP vs OOP
- ✅ Ereditarietà e prototipi
- ✅ Destrutturazione
- ✅ Template literals
- ✅ Arrow functions
- ✅ Spread e rest operators
- ✅ Manipolazione DOM
- ✅ JSON

### Module 4
- ✅ Node.js e npm
- ✅ Testing con Jest
- ✅ TDD
- ✅ Testing unitario, integrazione, E2E
- ✅ Refactoring

---

## 📝 Note Personali

Ho svolto **esercizi guidati e autonomi** per verificare le competenze acquisite, integrando alcuni contenuti con **risorse esterne** per approfondire aspetti non trattati nel corso.

Totale esercizi completati: **52 cartelle** di esercizi pratici.
