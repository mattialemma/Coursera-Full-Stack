# Destructuring

## Object Destructuring

```jsx
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

let { name, age, city } = person;

console.log(name); // "John"
console.log(age); // 30
console.log(city); // "New York"
```
---

## Array Destructuring

```jsx
var fruits = ['Apple', 'Banana', 'Orange'];

var [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1); // "Apple"
console.log(fruit2); // "Banana"
console.log(fruit3); // "Orange"
```

---

It is similar to React useState hook.

```jsx
const [count, setCount] = useState(0);
```


