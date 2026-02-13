# Context

With context you resolve the problem of prop drilling.
The problem of prop drilling is when you have to pass props from a parent component to a child component that is not a direct child of the parent component.

## Example

ThemeContext.tsx
```tsx

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

```

Switch/index.tsx
```jsx
import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
 const { theme, toggleTheme } = useTheme();
 return (
   <label className="switch">
     <input
       type="checkbox"
       checked={theme === "light"}
       onChange={toggleTheme}
     />
     <span className="slider round" />
   </label>
 );
};

export default Switch;


```