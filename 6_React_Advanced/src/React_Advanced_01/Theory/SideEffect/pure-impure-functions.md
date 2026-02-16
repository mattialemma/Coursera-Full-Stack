# Pure Functions

## What is a Pure Function?

A **pure function** is a function that satisfies the following conditions:

1.  **Same input, same output**: Given the same input, it always returns the same output (deterministic behavior).
2.  **No side effects**: It does not modify any state or variable outside its scope.
3.  **No mutation of parameters**: It does not change the values of its input arguments.

### Example of a Pure Function

```javascript
function add(a, b) {
  return a + b;
}
```

This function is pure because:
*   It always returns the same result for the same inputs.
*   It does not interact with external variables or systems.

### Example of an Impure Function (Non-deterministic)

```javascript
function add(a, b) {
  return a + b + Math.random();
}
```

This function is impure because:
*   For the same inputs, it may return different outputs.
*   It depends on an external source of randomness.

---

## Impure Functions

### What is an Impure Function?

An **impure function** is a function that does not meet the conditions of a pure function. It may:

*   Produce different outputs for the same input.
*   Modify external variables.
*   Interact with external systems (API calls, DOM manipulation, logging, etc.).

### Example of an Impure Function (State Mutation)

```javascript
let counter = 0;

function increment() {
  counter++;
}
```

This function is impure because it modifies a variable outside its scope.

---

## Side Effects

### What is a Side Effect?

A **side effect** is any operation that affects something outside the function’s local scope.

Common side effects include:
*   Modifying external variables
*   Making HTTP requests
*   Writing to the DOM
*   Logging to the console
*   Updating timers
*   Mutating objects passed by reference

### Example of a Side Effect

```javascript
function logMessage(message) {
  console.log(message);
}
```

Even though this function always logs the same message for the same input, it is still impure because it interacts with the external environment (the console).

---

## Why Pure Functions Matter in React

React is built around the idea that rendering should be pure. A component should behave like a mathematical function:

> **UI = f(props, state)**

Given the same props and state, the component should always render the same UI.

This makes components:
*   Predictable
*   Easier to debug
*   Easier to test
*   More maintainable

---

## Side Effects in React

Since rendering must remain pure, React provides a special hook to handle side effects: **The `useEffect` Hook**.

`useEffect` allows you to perform side effects separately from rendering logic.

### Example: Logging a Value

```jsx
import { useEffect } from "react";

function ShoppingCart(props) {
  const total = props.count * props.price;

  useEffect(() => {
    console.log(total);
  }, [total]);

  return (
    <h1>Total: {total}</h1>
  );
}
```

In this example:
*   The component rendering is pure.
*   The side effect (`console.log`) is handled inside `useEffect`.
*   The effect runs whenever `total` changes.

### Example: Fetching Data from an API

```jsx
import { useEffect, useState } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/user")
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return <div>{user ? user.name : "Loading..."}</div>;
}
```

In this case:
*   The API call is a side effect.
*   `useEffect` ensures it runs only once when the component mounts (because of the empty dependency array `[]`).

---

