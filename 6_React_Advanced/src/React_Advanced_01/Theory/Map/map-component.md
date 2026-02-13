# Map in JSX


```jsx
const data = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
  },
  {
    id: 3,
    name: "Bob",
    age: 35,
  },
];

export default function App() {

// With return beacuse I am doing things inside the function (row 27)
const list = data.map((item) => (
    const itemText = `${item.name} is ${item.age} years old`;
    return (
        <li>{itemText}</li>
    );
));
    
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
```
