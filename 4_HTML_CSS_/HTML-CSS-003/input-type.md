# Input Type

## Button

```html
<input type="button" value="Cliccami" onclick="msg()" />
```

We can use the tagg `<button>` to create a button and we can add text or an image inside it.

```html
<button onclick="alert('Are you sure you want to continue?')"> 
    <img src="https://yourserver.com/button_img.jpg" 
        alt="Submit the form" height="64" width="64">
</button>
```

---

## Checkbox

You can select multiple options.

```html
<input type="checkbox" id="dog" name="dog" value="Dog">
<label for="dog">I like dogs</label>
<input type="checkbox" id="cat" name="cat" value="Cat">
<label for="cat">I like cats</label>
```

With the "for", if you click on the text "I like dogs" or "I like cats", the checkbox will be checked.

---

## Radio Button

You can select only one option.

```html
<input type="radio" id="light" name="theme" value="Light"> 
<label for="light">Light</label> 
<input type="radio" id="dark" name="theme" value="Dark"> 
<label for="dark">Dark</label>
```

---

## Submit Button

```html
<form action="myserver.com" method="POST">
  …
<input type="submit" value="Submit" />
</form>
```

---

## Text Field

Single line text input.

```html
<label for="fname">First name:</label> 
<input type="text" id="fname" name="fname">
```

---

## Password Field

```html
<label for="pwd">Password:</label> 
<input type="password" id="pwd" name="pwd">
```

---

## Data Field

Year, month, day

```html
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```

---

## Time Field

Year, month, day, hour, minute

```html
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```

---

## Email Field

Automatically checks if the input is a valid email address.

```html
<label for="email">Enter your email:</label>
<input type="email" id="email" name="email">
```

---

## File Field

With "accept" attribute you can specify the file types that are allowed to be uploaded.
With "multiple" attribute you can allow multiple files to be uploaded.

```html
<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile" accept="image/*">
```

---

## hidden Field

Useful for sending data to the server that you don't want the user to see or modify.

```html
<input type="hidden" id="custId" name="custId" value="3487">
```

---

## Image Button

With "src" attribute you can specify the image to be used as the button.

```html
<input type="image"src="submit_img.png" alt="Submit" width="48" height="48">
```

---

## Number Field

```html
<input type="number" id="quantity" name="quantity" min="1" max="5">
```

---

## Interval Field

With "min" and "max" attributes you can specify the minimum and maximum values.

```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">
```

---

## Reset Button

```html
<input type="reset">
```

---

## Search Field

```html
<label for="gsearch">Search in Google:</label>
<input type="search" id="gsearch" name="gsearch">
```

---

## Time Field

Hour, minute

```html
<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">
```

---

## Tel Field

```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```

---

## URL Field

```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```

---

## Week Field

```html
<label for="week">Select a week:</label>
<input type="week" id="week" name="week">
```

---

## Month Field

```html
<label for="bdaymonth">Birthday (month and year):</label>
<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">
```
