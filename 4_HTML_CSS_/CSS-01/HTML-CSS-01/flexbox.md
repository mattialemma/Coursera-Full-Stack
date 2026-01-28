# 📦 What is Flexbox?

**Flexbox** (CSS Flexible Box Layout Module) is a layout system designed to arrange, align, and dynamically size elements inside a container, even when their size is unknown or variable.

When you set an element to:

```css
.container {
  display: flex;
}
```

It becomes a **flex container**, and all its direct children become **flex items**. The browser then applies the Flex Layout Algorithm instead of the standard block model.

---

## 🧭 Core Concept: Two Axes

Flexbox works along two reference axes, not just rows and columns.

- **Main Axis**: The primary direction in which items are laid out (defined by `flex-direction`).
- **Cross Axis**: The direction perpendicular to the main axis.

### 1. Defining Direction
You control the main axis using `flex-direction`:

```css
.container {
  flex-direction: row;            /* Default: Left to Right */
  /* flex-direction: column;         Top to Bottom */
  /* flex-direction: row-reverse;    Right to Left */
  /* flex-direction: column-reverse; Bottom to Top */
}
```

---

## 📐 Flexible Sizing (The "Flex" in Flexbox)

Items can grow or shrink to fit the available space using the `flex` shorthand:

```css
.item {
  /* flex: <flex-grow> <flex-shrink> <flex-basis>; */
  flex: 1 1 auto;
}
```

| Property | Description |
|----------|-------------|
| `flex-basis` | The initial size of the item before any space distribution. |
| `flex-grow` | How much the item handles **extra** space (0 = don't grow). |
| `flex-shrink` | How much the item handles **insufficient** space (1 = shrink to fit). |

### Example: Equal Columns
To create 3 columns that take up equal width:

```css
.column {
  flex: 1; /* Grows to fill space equally */
}
```

---

## 📏 Alignment

Flexbox provides powerful tools to align items on both axes.

### Main Axis Alignment (`justify-content`)
Controls distribution of space **between** items along the main line.

```css
.container {
  justify-content: flex-start;    /* Default */
  justify-content: center;        /* Pack items around the center */
  justify-content: space-between; /* Distribute evenly, first/last at edges */
  justify-content: space-around;  /* Distribute with equal space around them */
}
```

### Cross Axis Alignment (`align-items`)
Controls how items align relative to specific lines on the cross axis.

```css
.container {
  align-items: stretch;     /* Default: Stretch to fill container height */
  align-items: center;      /* Center vertically (if row) */
  align-items: flex-start;  /* Align to top */
  align-items: flex-end;    /* Align to bottom */
}
```

---

## 📄 Wraps and Multi-line Layouts

By default, Flexbox tries to fit everything on one line. You can allow wrapping:

```css
.container {
  flex-wrap: wrap; 
}
```

This creates multiple **flex lines** if there isn't enough space.

---

## 💡 Practical Example: Navbar

Here is a common pattern for a navigation bar using Flexbox:

### HTML
```html
<nav class="navbar">
  <div class="logo">MySite</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### CSS
```css
.navbar {
  display: flex;
  justify-content: space-between; /* Logo left, links right */
  align-items: center;            /* Vertically center content */
  padding: 1rem;
  background: #333;
  color: white;
}

.nav-links {
  display: flex; /* Make the list itself a flex container */
  gap: 20px;     /* Add space between links */
  list-style: none;
}
```