# @keyframes

`@keyframes` is an at-rule (rules starting with `@`) used to define the steps of an animation. While transitions and transforms can move elements from one point to another, `@keyframes` allow developers to create more complex and flexible animation sequences more easily.

## `from` and `to` keywords and using percentages (%) syntax

The `from` and `to` keywords in the `@keyframes` rule define the start and end states of an animation by changing property values from an initial to a final value.

```css
@keyframes animation-name {
    from {
        property-a: value-a;
    }
    to {
        property-a: value-b;
    }
}
```

In addition to `from` and `to`, animations can include multiple intermediate steps using percentages that represent how far the animation has progressed.

```css
@keyframes identifier {
    0% { transform: rotate(100deg); }
    30% { opacity: 1; }
    50% { opacity: 0.50; }
    70% { opacity: 1; }
}
```

Percentages in `@keyframes` show how an animation progresses and allow different properties to change at different stages, offering flexibility not possible with CSS transitions. `@keyframes` animations can loop, run forward or backward, and alternate. Each animation is linked to a specific `@keyframes` rule using `animation-name`. The `animation` property is a shorthand made up of several sub-properties, where `animation-name` and `animation-duration` are required, while others have default values if not specified.

## Animation example

```html
<body>
    <div class="box"></div>
</body>
</html>
```

```css
body {
    padding: 30px;
}

.box {
    background-color: lightcoral;
    width: 50px;
    height: 50px;
    animation: myanimation 3s infinite ease-in;
}

@keyframes myanimation {
    from {
        width: 50px;
    }
    to {
        width: 100px;
    }
}
```

The example shows an animation where an object’s width increases from 50px to 100px over 3 seconds and then repeats infinitely. It demonstrates a basic use of the `animation` property with the `@keyframes` rule.

The same result can be achieved by defining the animation steps using percentages instead of `from` and `to`:

```css
@keyframes myanimation {
    0% {
        width: 50px;
    }
    50% {
        background-color: aquamarine;
        height: 20px;
    }
    100% {
        width: 100px;
    }
}
```

Adding just a few lines to the `@keyframes` rule can significantly change the animation’s outcome. By adding more steps, animations become more dynamic and flexible, allowing the `animation` property and `@keyframes` to be used creatively to enhance web pages.