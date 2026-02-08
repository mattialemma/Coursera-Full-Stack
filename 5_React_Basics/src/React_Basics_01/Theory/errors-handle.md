# Error Handling

## JavaScript Error Handling

```javascript
try {
    (5).toUpperCase();
} catch(e) {
    console.log(`Oops, you can't uppercase a number. 
        Trying to do it resulted in the following`, e);
}
```

## React Error Handling

```jsx
function NumBillboard(props) {
    return (
        <>
            <h1>{prop.num}</h1>
        </>
    );
}

export default NumBillboard;
```

In this specific example, the error would be:

> **ReferenceError**: `prop` is not defined