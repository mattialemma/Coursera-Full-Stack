# Accessing the DOM using useRef

```jsx
import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Accesses the input and focuses it
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

In this example, `inputRef` is created using `useRef`. When you click the button, the `focusInput` function is called, which uses `inputRef.current.focus()` to set focus on the input field. This makes direct DOM interaction much simpler!