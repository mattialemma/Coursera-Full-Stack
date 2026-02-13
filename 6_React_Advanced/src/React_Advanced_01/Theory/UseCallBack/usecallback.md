## Without useCallback

```jsx
import React, { useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("render child");
  return <button onClick={onClick}>Click child</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
}
```


## With useCallback

```jsx
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("render child");
  return <button onClick={onClick}>Click child</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
}
```

## Explanation

### 1. The Problem (Without useCallback)
When the `Parent` component re-renders (e.g., when `count` changes upon clicking "Increment"):
1. The `Parent` function runs again.
2. The `handleClick` function is **re-created** from scratch.
3. In JavaScript, `function() {} !== function() {}`. Even if the code is identical, the **reference** in memory is new.
4. The `Child` component receives this *new* `handleClick` function as a prop.
5. `React.memo` (which wraps `Child`) notices that the `onClick` prop has changed.
6. **Result:** `Child` re-renders unnecessarily (`console.log("render child")` runs), defeating the purpose of optimization.

### 2. The Solution (With useCallback)
`useCallback` caches the function definition between renders.
```jsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []); // Empty dependency array
```
When `Parent` re-renders:
1. React checks the dependency array `[]`.
2. Since dependencies haven't changed, React returns the **same function instance** from the previous render.
3. `Child` receives the exact same prop reference.
4. `React.memo` sees no changes in props.
5. **Result:** `Child` skips re-rendering.

### 3. Data Flow: Parent to Child
This pattern demonstrates a core React concept: **Data flows down**.
- **Definition**: The logic (`console.log("clicked")`) is defined in the **Parent**.
- **Execution**: The trigger happens in the **Child** (user clicks the button).
- **The "Remote Control" Analogy**:
  - The `Parent` passes a "remote control" (the `handleClick` function) to the `Child` via the `onClick` prop.
  - The `Child` holds the remote, but when it presses the button, the action actually happens back in the `Parent`.