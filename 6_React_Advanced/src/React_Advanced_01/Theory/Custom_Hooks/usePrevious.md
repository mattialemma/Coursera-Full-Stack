# The `usePrevious` Hook

This custom hook allows you to store the *previous* state value from the last render. It is very useful for comparing the old value with the new one.

## Code Example

```javascript
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  
  const getNextDay = () => {
    if (day === "Monday") setDay("Tuesday");
    else if (day === "Tuesday") setDay("Wednesday");
    else if (day === "Wednesday") setDay("Thursday");
    else if (day === "Thursday") setDay("Friday");
    else if (day === "Friday") setDay("Monday");
  }
  
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {prevDay && (
          <span>Previous work day was: {prevDay}</span>
        )}
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

// Custom Hook Definition
function usePrevious(val) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = val;
  }, [val]);
  
  return ref.current;
}
```

## What does `const ref = useRef()` do?

`useRef()` creates a "box" or container that stays the same between renders.
1.  **It holds a value:** `ref.current` can store any value (like a string, number, or object).
2.  **It persists:** The value doesn't disappear when the component re-renders.
3.  **No Re-renders:** Crucially, changing `ref.current` **does not trigger a re-render**. 

If we used `useState` here instead, updating the state inside `useEffect` would trigger another render, which would trigger `useEffect` again, causing an **infinite loop**. `useRef` allows us to update the value "silently" in the background.


## Why does it return the old value?

The confusion often arises because **the code doesn't execute from top to bottom all at once**.

Here is exactly what happens when `day` changes from "Monday" to "Tuesday":

1.  **Render Starts**: React calls the component and executes `usePrevious("Tuesday")`.
2.  **Read Ref**: Inside the hook, `ref.current` still holds the previous value ("Monday").
3.  **Return**: The hook executes `return ref.current`. At this moment, it **returns "Monday"**.
4.  **Render Finishes**: React updates the DOM, showing "Today is Tuesday" and "Previous was Monday".
5.  **Effect Runs**: *Only after the render is complete*, React executes the code inside `useEffect`.
6.  **Assignment**: `ref.current = val` ("Tuesday"). Now the ref is updated to "Tuesday", but the render is **already finished**!

### Summary
- The `return` happens **BEFORE** the update.
- The `useEffect` (assignment) happens **AFTER** the render.

So, you read the old value, show the result, and *then* prepare for the future by saving the new value.
