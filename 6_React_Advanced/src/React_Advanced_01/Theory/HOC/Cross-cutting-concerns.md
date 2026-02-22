# Higher-Order Components (HOC)

A **Higher-Order Component (HOC)** is an advanced pattern in React for reusing component logic. It is not part of the React API, per se; it is a pattern that emerges from React’s compositional nature.

> [!TIP]
> **The Analogy**: Think of an HOC as a **"Gift Wrap"** or a **"Superpower"**. You have a standard component (the gift), and you wrap it with an HOC to give it extra features (the wrapping paper or a new skill) without changing the gift itself.

---

## What are Cross-Cutting Concerns?

In software development, a **cross-cutting concern** is a piece of logic that needs to be used by many different parts of an application but doesn't naturally fit into any single one. 

Common examples include:
- **Authentication**: Checking if a user is logged in.
- **Logging**: Tracking user actions.
- **Data Subscriptions**: Connecting many different components to the same data source.

An HOC allows you to define this logic **once** and "inject" it into any component that needs it.

---

## Practical Example: `withSubscription`

The following HOC wraps a component and automatically handles subscribing to a data source.

```jsx
import React, { useState, useEffect } from "react";

const withSubscription = (WrappedComponent, selectData) => {
  // It returns a new Functional Component
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Logic to handle data changes
      const handleChange = () => {
        const newData = selectData(DataSource, props);
        setData(newData);
      };

      // 1. Subscribe to the data source on mount
      DataSource.addListener(handleChange);

      // 2. Cleanup: Unsubscribe on unmount to prevent memory leaks
      return () => {
        DataSource.removeListener(handleChange);
      };
    }, []); // Empty array means this runs once on mount

    // 3. Render the original component with the new data + all original props
    return <WrappedComponent data={data} {...props} />;
  };
};
```

### How it works step-by-step:

1.  **Input**: `withSubscription` takes two things: a component (`WrappedComponent`) and a function to pick specific data (`selectData`).
2.  **Internal State**: The HOC manages the `data` state so the wrapped component doesn't have to.
3.  **Lifecycle**: It handles the complexity of `addListener` and `removeListener` automatically.
4.  **Prop Forwarding**: Using `{...props}` ensures that any props intended for the original component (like `id` or `title`) are passed through correctly.

---

## Rules and Best Practices

1.  **Don't Mutate the Original Component**: Always return a *new* component; never modify the `WrappedComponent.prototype`.
2.  **Pass Unrelated Props Through**: As shown with `{...props}`, always ensure the wrapped component receives its original props.
3.  **Maximize Composability**: You can stack HOCs together! 
    `const Enhanced = withTheme(withUser(MyComponent));`
4.  **Don't Use HOCs Inside Render**: Always define your enhanced components *outside* of other components to avoid performance issues and state loss on re-renders.

> [!IMPORTANT]
> While HOCs are powerful, modern React often replaces them with **Custom Hooks** (e.g., `useSubscription`). However, HOCs remain a vital pattern to understand, especially when working with class components or specific architectural needs.