# CSS vs SCSS vs SASS

## Regular CSS
```css
body { 
    font: 100% Arial; 
    color: lightblue; 
} 
```

## SCSS (Sassy CSS)
SCSS is a superset of CSS. It uses curly braces `{}` and semicolons `;`.

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: lightblue;

body { 
    font: 100% $font-stack; 
    color: $primary-color; 
} 
```

## SASS (Indented Syntax)
SASS uses indentation and newlines instead of curly braces and semicolons.

```sass
$font-stack: Helvetica, sans-serif
$primary-color: lightblue

body
    font: 100% $font-stack
    color: $primary-color
```

## Mixins (SCSS)
With SCSS/SASS, you can also use `@mixin` with parameters. For example:

```scss
@mixin some-rules { 
    color: lightblue; 
    font-size: 25px; 
    font-weight: bold; 
}

div { 
    @include some-rules; 
} 
```

## Stylus CSS
Stylus can omit braces, colons, and semicolons.

```stylus
body 
  font 100% Arial 
  color lightblue 
```

## Functions (Stylus)

```stylus
add(a, b) 
  a + b 

div 
  margin add(10px, 20px) 
```

## Key Differences

| Feature | CSS | SCSS | SASS |
| :--- | :--- | :--- | :--- |
| **Syntax** | Braces `{}` & Semicolons `;` | Braces `{}` & Semicolons `;` | Indentation & Newlines |
| **Compatibility** | Standard | Fully compatible (Superset) | Not compatible with CSS syntax |

### Notes
- **Variables**: In SCSS/SASS, variables start with a `$` prefix (e.g., `$primary-color`). Using variables avoids repetition (e.g., typing `lightblue` multiple times).
- **Conciseness**: SASS removes the need for braces and semicolons, making the code cleaner but stricter on indentation.
- **SCSS Preference**: SCSS is often preferred because it allows valid CSS to be written directly inside it.
