
```jsx
function LogInOutButton(props) {
const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
  return <LoginButton />;
}
```

When we render this component, React will check the value of `isLoggedIn` and render the appropriate button.

Imagine that we are in another component and we call LogInOutButton and pass `false` as a prop to it.

```jsx
<LogInOutButton isLoggedIn={false} />
```

**Output:**
```
LoginButton
```

Now, imagine that we pass `true` as a prop to it.

```jsx
<LogInOutButton isLoggedIn={true} />
```

**Output:**
```
LogoutButton
```