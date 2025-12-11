# let, var, const in JavaScript

## Differenze principali tra let e var in JavaScript

### 1. Scope

**let** → **block scope**: la variabile esiste solo all'interno del blocco `{ ... }` in cui è definita.

**var** → **function scope**: la variabile esiste nell'intera funzione in cui è dichiarata (o globalmente, se fuori da qualsiasi funzione).

---

### 2. Ri-dichiarazione

**let** → non permette la ri-dichiarazione nello stesso scope
→ tentare di farlo genera un `ReferenceError`.

**var** → permette la ri-dichiarazione senza errori.

#### Utilizzo scorretto di let:

- Se dichiaro una variabile con `let` non inizializzandola e la stampo, in output avrò `undefined`.
```javascript
let a;
console.log(a) // Output: undefined
```

- Se la utilizzo in operazioni otterrò `NaN`:
```javascript
let a; 
let b = 1; 
let ris = a + b; 
console.log(ris); // Output: NaN (perchè undefined + 1)
```

---

### 3. Hoisting

**let** → viene hoisted ma entra in **Temporal Dead Zone (TDZ)**:
non può essere usata prima della dichiarazione.

**var** → viene hoisted e inizializzata come `undefined`:
può essere usata prima della dichiarazione, anche se è sconsigliato.

---

### 4. Proprietà globali

Dichiarando una variabile globalmente:

**var** → diventa una proprietà dell'oggetto globale (`window` nel browser).

**let** → non viene aggiunta all'oggetto globale.

---

## SPIEGAZIONE HOISTING

L'hoisting è un comportamento di JavaScript in cui le dichiarazioni delle variabili e delle funzioni vengono "spostate in alto" (hoist = sollevare) all'inizio dello scope prima che il codice venga eseguito.

### Esempio:

```javascript
console.log(x); // Output: undefined
var x = 5;
```

JavaScript lo interpreta come se fosse:

```javascript
var x;        // dichiarazione spostata in alto
console.log(x);
x = 5;        // assegnazione lasciata al suo posto
```

---

## Const

```javascript
const piGreco = 4.141592; // Valore che non cambia, costante
```

### Regole per const:

- La dichiarazione è obbligatoria, altrimenti → errore di sintassi.
- Non si può accedere a `const` prima dell'inizializzazione.
- Prima inizializzo, poi utilizzo.
- Non è possibile inizializzare nuovamente `const` con altri valori.
