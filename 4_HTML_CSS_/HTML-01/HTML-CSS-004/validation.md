# Client side validation
It is done on the client side, in the browser.
The http request is not sent to the server for validation.

---

# Server side validation
It is done on the server side, in the server.
The http request is sent to the server for validation.

---

# Client side validation examples
## Examples

With the "minlength" and "maxlength" attributes you can specify the minimum and maximum length of the input. With the "required" attribute you can specify that the input is required.

```html
<input type="text" name="username" required minlength="3" maxlength="16">
```

---
## Examples with CSS

```html
input:invalid {
    border: 1px solid red;
}
```
But now the border is red also when the form is empty beacuse the input is invalid.
If we want to show the border only when the input is invalid, we can use the ":invalid" pseudo-class.

```html
input:focus:invalid {
    border: 1px solid red;
}
```
