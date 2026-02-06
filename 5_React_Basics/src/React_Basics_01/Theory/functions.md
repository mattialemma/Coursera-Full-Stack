# Functions

```jsx
function Component() {

    const example = () => {
        Math.floor(Math.random() * 10) + 1; // returns a random number between 1 and 10
    }

    return (
        <div className="flex justify-center">
            <h1> This is a random number between 1 and 10: {example()} </h1>
        </div>
    )
}
```


## Other ways to write functions

```jsx
const example = function() {
    return Math.floor(Math.random() * 10) + 1; 
}
```

or

```jsx
function example() {
    return Math.floor(Math.random() * 10) + 1;
}
```


## Advanced example

```jsx
const bool = false;
const str1 = "just";

function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
        </div>
    );
};
```
