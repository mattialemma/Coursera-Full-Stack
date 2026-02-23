# Types of Children

In JSX expressions, the content between an opening and closing tag is passed as a unique prop called children. There are several ways to pass children, such as rendering string literals or using JSX elements and JavaScript expressions. It is also essential to understand the types of JavaScript values that are ignored as children and don’t render anything. 

## String literals

String literals refer to simple JavaScript strings. They can be put between the opening and closing tags, and the children prop will be that string.

1. JSX removes whitespaces at the beginning and end of a line, as well as blank lines:

```jsx
<div>    Little Lemon   </div>
<div>
  Little Lemon
</div>
```

2. New lines adjacent to tags are removed:

```jsx
<div>

  Little Lemon
</div>
```

3. JSX condenses new lines that happen in the middle of string literals into a single space:

```jsx
<div>
  Little
  Lemon
</div>
```

## JSX elements

You can provide JSX elements as children to display nested components:

```jsx
<Alert>
  <Title />
  <Body />
</Alert>
```

JSX also enables mixing and matching different types of children, like a combination of string literals and JSX elements:

```jsx
<Alert>
  <div>Are you sure?</div>
  <Body />
</Alert>
```

A React component can also return a bunch of elements without wrapping them in an extra tag. For that, you can use React Fragments either using the explicit component imported from React or empty tags, which is a shorter syntax for a fragment. A React Fragment component lets you group a list of children without adding extra nodes to the DOM. 

The two code examples below are equivalent, and it’s up to your personal preference what to choose, depending on whether you prefer explicitness or a shorter syntax:

```jsx
import { Fragment } from 'react';

function Alert() {
  return (
    <Fragment>
      <Title />
      <Body />
    </Fragment>
  );
}
```

```jsx
function Alert() {
  return (
    <>
      <Title />
      <Body />
    </>
  );
}
```

## JavaScript expressions

You can pass any JavaScript expression as children by enclosing it within curly braces, {}. The below expressions are identical:

<MyComponent>Little Lemon</MyComponent>

<MyComponent>{'Little Lemon'}</MyComponent>

This example is just for illustration purposes. When dealing with string literals as children, the first expression is preferred.

Earlier in the course, you learned about lists. JavaScript expressions can be helpful when rendering a list of JSX elements of arbitrary length:

```jsx
function Dessert(props) {
  return <li>{props.title}</li>;
}

function List() {
  const desserts = ['tiramisu', 'ice cream', 'cake'];
  return (
    <ul>
      {desserts.map((dessert) => <Item key={dessert} title={dessert} />)}
    </ul>
  );
}
```

Also, you can mix JavaScript expressions with other types of children without having to resort to string templates, like in the example below:

```jsx
function Hello(props) {
  return <div>Hello {props.name}!</div>;
}
```

## Booleans, Null and Undefined are ignored

`false`, `null`, `undefined`, and `true` are all valid children. They simply don’t render anything. The following expressions will all render the same thing:

```jsx
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

While these values don't render content on their own, they are extremely useful for **conditional rendering**. For example, you can render a `Modal` component only if `showModal` is true:

```jsx
<div>
  {showModal && <Modal />}
</div>
```

> [!WARNING]
> React still renders some "falsy" values, specifically the number `0`.
> 
> If `props.desserts` is an empty array, the following code will render `0` on the screen because `0` is a number, and React treats it as valid content:
>
> ```jsx
> <div>
>   {props.desserts.length &&
>     <DessertList desserts={props.desserts} />
>   }
> </div>
> ```
>
> To fix this, always ensure the expression before `&&` is a **boolean**:
>
> ```jsx
> <div>
>   {props.desserts.length > 0 &&
>     <DessertList desserts={props.desserts} />
>   }
> </div>
> ```
> 
> Alternatively, you can use the double-bang `!!` operator to convert the length to a boolean:
>
> ```jsx
> <div>
>   {!!props.desserts.length &&
>     <DessertList desserts={props.desserts} />
>   }
> </div>
> ```

## Summary

JSX is highly flexible in what it accepts as children. By understanding how React handles strings, elements, expressions, and falsy values, you can build dynamic and robust user interfaces. Always be mindful of the difference between "ignored" values (`null`, `undefined`, `bool`) and "rendered" falsy values (`0`).
