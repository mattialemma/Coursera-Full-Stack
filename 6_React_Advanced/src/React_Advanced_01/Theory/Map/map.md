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

// Without return beacuse I am returning an object using {}
const list = data.map((item) => (
  {
    content: `${item.name} is ${item.age} years old`,
    surname: item.surname,
  };
));


export default function App() {
  console.log(list);
  return (
    <div>
      
    </div>
  );
}
```
