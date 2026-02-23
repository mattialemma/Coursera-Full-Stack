# Spread Operator in React

The spread operator (`...`) is a powerful tool in JavaScript and React, primarily used for copying and merging objects or arrays without mutating the original data.

## Basic Usage

### Copying Objects

You can create a shallow copy of an object easily:

```javascript
const order = {
    id: 1,
    username: "Mattia Lemma",
    item: "Pizza Margherita",
    price: "$30.00",
};

const orderCopy = { ...order };
```

### Merging and Updating Objects

The spread operator is ideal for updating specific properties while keeping the rest of the object intact. This is a core pattern in React state management.

```javascript
const orderAmend = {
    ...order,
    item: "Pizza Prosciutto", // Overrides the original 'item'
};
```

> [!IMPORTANT]
> **Immutability is Key**: In React, you should never mutate state directly. Using the spread operator ensures you create a **new object** instead of modifying the old one, allowing React to correctly detect changes and re-render.

---

## Spreading Props in Components

Passing props individually can become tedious. The spread operator allows you to forward an entire object as props to a component.

```jsx
const order = {
    id: 1,
    username: "Mattia Lemma",
    item: "Pizza Margherita",
    price: "$30.00",
};

// Instead of manual assignment:
function ManualOrderList() {
    return (
        <Order 
            id={order.id} 
            username={order.username} 
            item={order.item} 
            price={order.price} 
        />
    );
}

// You can use the spread operator:
function EfficientOrderList() {
    return <Order {...order} />;
}
```

---

## Advanced Use Cases

### The "Rest" Parameter and Prop Forwarding

You can use the **rest** pattern to extract specific props and collect the remaining ones into a single object.

```jsx
/**
 * A reusable Button component
 * @param type - Determines the style (primary/secondary)
 * @param children - The button text/elements
 * @param buttonProps - All other standard button props (onClick, disabled, etc.)
 */
const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";

  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

// Usage Example:
// buttonProps will contain { onClick: handleClick, disabled: true }
<Button type="primary" onClick={handleClick} disabled>
  Click me
</Button>
```

### Component Composition and Overriding

This pattern is useful for creating specialized components on top of base ones.

```jsx
/* LoginButton wrapper component */
const LoginButton = ({ children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps} // Spread incoming props
      onClick={(e) => {
        // If an onClick was passed from outside, call it first
        buttonProps.onClick?.(e);

        // Then execute internal logic
        alert("Logging in!");
      }}
    >
      {children}
    </Button>
  );
};
```

> [!NOTE]
> **Order Matters**: In JSX, the order of props determines priority. If you put `{...buttonProps}` *after* `type="secondary"`, an external `type` prop would override your default. By putting `{...buttonProps}` *before* or being intentional about placement, you control the override behavior.
