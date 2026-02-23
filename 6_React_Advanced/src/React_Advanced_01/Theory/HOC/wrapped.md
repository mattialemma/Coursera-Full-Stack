# Higher-Order Components (HOC) – Practical Guide

This guide explores the practical implementation of Higher-Order Components in React, focusing on reusability, prop forwarding, and the conceptual differences between HOCs and Hooks.

---

## 1. What Is a Higher-Order Component?

A **Higher-Order Component (HOC)** is a function that takes a component and returns a new, enhanced component.

> [!NOTE]
> **Formula**: `Component ⇒ Component`

An HOC does not modify the original component. Instead, it **wraps** it inside another component to add behavior or data. The purpose is to reuse shared logic across multiple components without duplicating code.

---

## 2. Prop Forwarding: The Golden Rule

When creating an HOC, it is crucial to pass through all props that are unrelated to the HOC's specific concern. This ensures the HOC remains flexible and reusable.

### Example: `withMousePosition`

```jsx
const withMousePosition = (WrappedComponent) => {
  const injectedProp = { mousePosition: { x: 10, y: 10 } };

  return (originalProps) => {
    // We inject the 'mousePosition' prop but SPREAD all original props
    return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
  };
};
```

> [!IMPORTANT]
> **Don't break the contract**: The component returned from an HOC should have an interface similar to the wrapped component so it can be used interchangeably.

---

## 3. Conditional Rendering: `withFeature`

HOCs are often used for "Feature Flags" or conditional access.

### The Implementation
```javascript
function withFeature(featureName) {
  return function (WrappedComponent) {
    return function (props) {
      const hasFeature = checkFeature(featureName);

      // If the feature is missing, render nothing
      if (!hasFeature) return null;

      // If present, render the component with all its props
      return <WrappedComponent {...props} />;
    };
  };
}
```

### The Usage
```javascript
const PremiumDashboard = withFeature("premium")(Dashboard);
```

### Who Is Who?
In this example:
- `featureName` = `"premium"`
- `WrappedComponent` = `Dashboard`
- `PremiumDashboard` = The resulting **enhanced** component.

---

## 4. Decoration vs. Mutation

It is a common misconception that HOCs change the original component. They don't.

> [!CAUTION]
> **Avoid Mutation**: Mutation would mean changing `Dashboard.prototype` or re-assigning the original function. 
> An HOC **decorates** — it leaves the original `Dashboard` untouched and simply creates a "wrapper" around it.

```javascript
// This is NOT mutation, it's a wrapper:
function PremiumDashboard(props) {
  return <Dashboard {...props} />;
}
```

---

## 5. Real-World Applications

| Area | Example Pattern |
| :--- | :--- |
| **Authentication** | `withAuth(ProtectedPage)` - Redirects to login if not authenticated. |
| **Feature Flags** | `withFeature("beta")(NewModule)` - Controls visibility of new features. |
| **Logging** | `withTracking(Component)` - Logs every time a component renders. |
| **State Injection** | `connect(mapState)(Component)` - The classic Redux pattern. |

---

## 6. HOCs vs. Custom Hooks

With the introduction of Hooks, many patterns previously handled by HOCs are now handled by hooks.

### Conceptual Difference

- **HOC**: Enhances from the **outside**. It wraps the component and produces a new one. Useful for class components or "Gatekeeping" logic (like Auth/Feature flags) that prevents a component from even mounting.
- **Hook**: Adds logic **inside**. It keeps the logica and UI in the same place and does not create a new component.

> [!TIP]
> **When to use what?** Use Hooks for internal logic and data fetching. Use HOCs for structural concerns or when you need to wrap components you don't "own" (third-party components).

---

## 7. When to Avoid HOCs

Avoid using HOCs if the difference is only UI-based. 

**Bad (Overengineering):**
`const PremiumButton = withFeature("premium")(Button);`

**Good (Simple):**
`{isPremium && <ExtraButton />}`

Keep it simple: Use props, conditional rendering, or standard composition before reaching for an HOC.
