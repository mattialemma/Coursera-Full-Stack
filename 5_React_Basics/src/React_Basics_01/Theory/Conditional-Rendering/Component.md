# Conditional Rendering

```jsx
function CurrentMessage({day}) {
    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);
    let message;

    if (weekday) {
        message = <Workdays />
    } else if (weekend) {
        message = <Weekends />
    } else {
        message = <ErrorComponent />
    }

    return (
        <div>
            {message}
        </div>
    )
}
```

---


If I want to use props instead of Date().getDay(), I can do the following:

```jsx
function CurrentMessage(props) {
    if (props.day >= 1 && props.day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}
```

---

```jsx
function CurrentMessage() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}

function Workdays() {
    return <h1>The current day is a weekday.</h1>
}

function Weekends() {
    return <h1>The current day is a weekend.</h1>
}

export default CurrentMessage
```

# Conditional rendering using the logical AND operator

```jsx
function LogicalAndExample() {
    const val = prompt('Anything but a 0')

    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {val &&
                <h2>Yay, no 0 was typed in!</h2>
            }
        </div>
    )
}

/*

if I type 5 | Output:
Please don't type in a zero
Yay, no 0 was typed in!

if I type 0 | Output:
Please don't type in a zero

*/


```
## Explanation of logical AND operator
To understand what will be output on screen, consider the following example in standard JavaScript:

```jsx
true && console.log('This will show')
```
If you ran this command in the browser’s console, the text ‘This will show’ will be output.

On the flip side, consider the following example:

```jsx
false && console.log('This will not show')
```

If you ran this command, the output will just be the boolean value of false.

## Why does this work?
In other words, if a prop gets evaluated to true, using the && operator, you can render whatever JSX elements you want to the right of the && operator.

