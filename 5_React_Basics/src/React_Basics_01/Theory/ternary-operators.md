# Ternary Operators
## comparison ? true : false

```jsx
name == Bob ? "Yes, it is Bob" : "I don't know this person";
```

# Example with components

```jsx
function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};
```