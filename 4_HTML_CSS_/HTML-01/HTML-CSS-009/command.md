# Glossary – HTML Form Elements

The `<form>` element in HTML is an important and useful element. This sheet provides an overview of the `<form>` constituent elements and their common attributes with simple examples for quick reference.

## `<input>`

Used to create interactive controls, such as buttons and different types of text fields, to accept data from the user.

The key attribute is `type`. Common values include:
*   `button`, `checkbox`, `date`, `email`, `number`, `password`, `submit`, `text`, `url`

### Example

```html
<form action="my_action_page"> 
  <label for="uname">Username:</label><br> 
  <input type="text" id="uname" name="username"><br> 

  <label for="pwd">Password:</label><br> 
  <input type="password" id="pwd" name="pwd"><br><br> 
</form>
```

> `type="password"` hides the user input.

## `<label>`

Defines a label for an element. The `for` attribute must match the `id` of the associated input.

```html
<label for="uname">Username:</label>
<input type="text" id="uname">
```

This improves accessibility and usability.

## `<select>`

Defines a drop-down list.

**Common attributes:**

*   `form` → id of the form
*   `name` → name of the control
*   `multiple` → allows multiple selections
*   `required` → forces a selection
*   `size` → number of visible options

Options are defined using `<option>`.

## `<textarea>`

Defines a multi-line text input field.

**Common attributes:**

*   `cols` → width (default 20)
*   `rows` → number of visible lines
*   `maxlength` → max characters
*   `minlength` → min characters
*   `readonly` → cannot be modified
*   `form` → associated form

### Example

```html
<textarea name="response" rows="10" cols="30" maxlength="200">
</textarea>
```

> 10 visible rows, ~30 characters wide, max 200 characters.

## `<button>`

Defines a clickable button.

### Example

```html
<button type="button" onclick="alert('You just clicked!')">
  Click Me!
</button>
```

> The `onclick` attribute defines the behavior.

## `<fieldset>`

Groups related elements in a form. Useful to separate sections like personal info, education, etc.

## `<legend>`

Defines a caption for a `<fieldset>`.

### Example

```html
<fieldset>
  <legend>Personal Info</legend>

  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>

  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br>
</fieldset>
```

## `<datalist>`

Specifies a list of pre-defined options for an input field. Unlike `<select>`, the user can still enter custom values.

### Example

```html
<form action="/my_action_page">
  <label for="flowers">Favourite flower:</label><br>

  <input list="flowers" name="flowers">

  <datalist id="flowers">
    <option value="Rose">
    <option value="Lily">
    <option value="Tulip">
    <option value="Daffodil">
    <option value="Orchid">
  </datalist>
</form>
```

> Shows suggestions but allows free input.

## `<output>`

Represents the result of a calculation or a user action (often updated via JavaScript).

**Example use cases:**
*   Calculators
*   Live form results
*   Dynamic feedback

## `<option>`

Defines an option inside `<select>` or `<datalist>`.

### Example

```html
<label for="course">Choose a course:</label><br>

<select id="course" name="courselist">
  <option value="html">HTML Introduction</option>
  <option value="css">Styling with CSS</option>
  <option value="js">JavaScript</option>
  <option value="react">React Basics</option>
</select>
```

> By default, the first option is selected. Use `selected` to pre-select one.

## `<optgroup>`

Groups related options inside a drop-down list.

### Example

```html
<select>
  <optgroup label="Frontend">
    <option>HTML</option>
    <option>CSS</option>
  </optgroup>

  <optgroup label="Backend">
    <option>Node.js</option>
    <option>Python</option>
  </optgroup>
</select>
```