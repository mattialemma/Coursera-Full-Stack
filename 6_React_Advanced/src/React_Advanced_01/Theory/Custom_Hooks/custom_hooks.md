# Custom Hooks in React — Compact Version

## 📌 What is a Custom Hook?
A custom hook is a JavaScript function that:
- Starts with `use`
- Uses one or more React hooks inside it
- Used to reuse logic between components
- It is a way to extract reusable behavior.

## 🎯 Why use them?
- **Reuse logic**: Avoid rewriting the same code.
- **Separate UI and side effects**: keep components clean.
- **Cleaner code**: Improve readability.
- **Avoid duplication**: Adhere to DRY (Don't Repeat Yourself) principle.

## ⚠️ Side Effects
Operations like `console.log()` are side effects. In React, side effects must be handled with:
`useEffect()`

---

## Example

### 1️⃣ Base Component
```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Plus 1</button>
    </>
  );
}
```

### 2️⃣ The Custom Hook (`useConsoleLog.js`)
```jsx
// File: useConsoleLog.js
import { useEffect } from "react";

function useConsoleLog(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

export default useConsoleLog;
```

### 3️⃣ Usage in the Component
```jsx
import useConsoleLog from "./useConsoleLog";

// Inside your component
useConsoleLog(count);
```

---

## 🔎 How it works
1. The hook receives a `value`.
2. `useEffect` triggers when the `value` changes.
3. The dependency array `[value]` controls when the effect runs.

## 🧠 Key Concept
A custom hook is simply **a function that encapsulates logic based on React hooks so it can be reused**.
