# React Component Basics

## What is a Component?

A **component** is a reusable piece of UI. Think of it like a LEGO block that you can combine with others to build complex interfaces.

## Function Components

The simplest way to create a component is with a JavaScript function:

```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

## Props

**Props** are inputs to components. They let you pass data from parent to child:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage: <Greeting name="Mario" />
```

## Key Takeaway

> 💡 Components are functions that return JSX. Use props to make them dynamic!
