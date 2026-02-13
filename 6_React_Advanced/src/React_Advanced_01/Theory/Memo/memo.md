# React.memo

This example demonstrates how `React.memo` prevents unnecessary re-renders when props do not change.

## Example 1 – Props Do NOT Change

In this example, `ComponentA` receives a prop that never changes. Even if `App` re-renders, `ComponentA` (and its children) will **NOT** re-render.

```jsx
import React, { useState } from "react";

const ComponentC = () => {
    console.log("render C");
    return null;
};

const ComponentB = () => {
    console.log("render B");
    return <ComponentC />;
};

const ComponentA = React.memo(({ name }) => {
    console.log("render A", name);
    return <ComponentB />;
});

export default function App() {
    const [count, setCount] = useState(0);

    console.log("render App", count);

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>count: {count}</button>

            {/* Prop never changes */}
            <ComponentA name="Mattia" />
        </div>
    );
}
```

### Initial Render Output
```
render App 0
render A Mattia
render B
render C
```

### After Clicking the Button
```
render App 1
render App 2
...
```

Notice that `ComponentA`, `ComponentB`, and `ComponentC` do **NOT** re-render because:
- `React.memo` performs a shallow comparison.
- The prop `name` remains `"Mattia"`.
- Therefore, the component is skipped.

---

## Example 2 – Props Change

In this example, the prop passed to `ComponentA` changes on every click.

```jsx
<ComponentA name={count} />
```

_Full component remains the same except for this line._

### Initial Render Output
```
render App 0
render A 0
render B
render C
```

### After Clicking the Button
```
render App 1
render A 1
render B
render C
```

Now `ComponentA` re-renders because:
- The prop `name` changes from `0` to `1`.
- Shallow comparison detects the difference.
- `React.memo` allows the re-render.

## Key Takeaways (React.memo)

- `React.memo` prevents re-renders when props are shallowly equal.
- If a memoized component is skipped, its entire subtree is skipped.
- If any prop changes, the component and its children re-render.
- Shallow comparison means object references matter (new object = new prop).


---

# React Context + React.memo – Object Reference Problem

Even if a component is wrapped with `React.memo`, context updates can still trigger re-renders.

Let’s analyze the following example.

## Example 3 – Context Value Created Inline (Causes Re-renders)

```jsx
import React, { useContext } from "react";

const App = () => {
  const value = { a: "hi", b: "bye" };

  return (
    <AppContext.Provider value={value}>
      <ComponentA />
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;

const ComponentC = () => {
  const contextValue = useContext(AppContext);
  console.log("render C", contextValue);
  return null;
};
```

### What Happens?

Even if `a` and `b` never change, this line:

```javascript
const value = { a: "hi", b: "bye" };
```

creates a **new object** on every render.

In JavaScript:
```javascript
{ a: "hi" } !== { a: "hi" }
```
Objects are compared by reference, not by content.

So every time `App` renders:
1. A new object is created.
2. The Provider receives a new value.
3. React notifies all context consumers.
4. `ComponentC` re-renders.

> [!IMPORTANT]
> `React.memo` does **NOT** block context updates.
> It only blocks re-renders caused by unchanged **props**.

## Example 4 – Using useMemo to Stabilize the Context Value

To prevent unnecessary re-renders, we memoize the object:

```jsx
import React, { useMemo, useContext } from "react";

const App = () => {
  const a = "hi";
  const b = "bye";

  const value = useMemo(() => ({ a, b }), [a, b]);

  return (
    <AppContext.Provider value={value}>
      <ComponentA />
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;

const ComponentC = () => {
  const contextValue = useContext(AppContext);
  console.log("render C", contextValue);
  return null;
};
```

### What Changed?

Now:
- `useMemo` returns the same object reference.
- The value only changes if `a` or `b` change.
- The Provider receives the same reference.
- Context consumers are **NOT** notified unnecessarily.
- `ComponentC` does not re-render.

## Key Takeaways (Context + Optimization)

- Context updates are based on reference equality.
- Creating objects inline inside a component causes new references every render.
- `React.memo` does **NOT** prevent re-renders caused by context updates.
- Use `useMemo` to stabilize object references when passing context values.
- Avoid inline object/array/function creation in Providers when performance matters.