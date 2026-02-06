# Arrow Functions in React and JavaScript

## 1. Arrow Function Components
Arrow functions are a concise way to write components in React.

```tsx
const Nav = (props: { name: string, surname: string }) => {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.surname}</li>
        </ul>
    );
};

export default Nav;
```

## 2. Standard vs Arrow Functions

Arrow functions provide a shorter syntax, especially for inline callbacks.

```javascript
const numbers = [10, 20, 30];

// Standard function syntax
numbers.forEach(function (item) {
    console.log(item * 2);
});

// Arrow function syntax (concise)
numbers.forEach(item => console.log(item * 2));
```

## 3. `forEach` vs `map`

- **forEach**: Iterates over elements but does **not** return a new array (returns `undefined`). The original array remains unchanged.
- **map**: Iterates over elements and **returns a new array** with the results.

```javascript
console.log(numbers); // [10, 20, 30] - Original array is NOT modified by forEach

// Using map to create a new array
const double = numbers.map(item => {
    return item * 2;
});

console.log(double); // [20, 40, 60] - New array created
```


