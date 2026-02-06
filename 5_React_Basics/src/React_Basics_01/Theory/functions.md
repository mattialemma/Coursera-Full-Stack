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