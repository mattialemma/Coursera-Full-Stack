# CSS Grid & Flexbox Cheat Sheet

> **Note**: `|` stands for alternatives or OR.

---

## 🏗️ CSS Grid

### Basic Syntax
```css
.container {
  display: grid;
  /* or display: inline-grid; */
}
```

### Container Properties

#### 📐 Template & Sizing
| Property | Description | Values |
|----------|-------------|--------|
| `grid-template-columns` | Defines column sizes/names | `100px`, `1fr`, `repeat(3, 1fr)` |
| `grid-template-rows` | Defines row sizes/names | `100px`, `auto`, `20%` |
| `grid-template-areas` | Defines named grid areas | `"header header" "main sidebar"` |

#### 🔄 Auto-Placement
| Property | Description | Default |
|----------|-------------|---------|
| `grid-auto-flow` | How auto-placed items flow | `row` |
| `grid-auto-rows` | Default size for implicit rows | `auto` |
| `grid-auto-columns` | Default size for implicit columns | `auto` |

#### ↔️ Gaps (Gutters)
| Property | Description |
|----------|-------------|
| `column-gap` | Space between columns |
| `row-gap` | Space between rows |
| `gap` | Shorthand for row and column gaps |

#### 📏 Alignment (Container)
| Property | Description | Usage |
|----------|-------------|-------|
| `justify-content` | Aligns grid along **main axis** | `start`, `center`, `space-between` |
| `align-content` | Aligns grid along **cross axis** | `start`, `center`, `stretch` |
| `place-content` | Shorthand for align/justify content | `center center` |
| `justify-items` | Default alignment for **items** (inline axis) | `start`, `center`, `stretch` |
| `align-items` | Default alignment for **items** (block axis) | `start`, `center`, `stretch` |
| `place-items` | Shorthand for align/justify items | `center stretch` |

### Item Properties (Children)

#### 📍 Positioning
| Property | Description | Example |
|----------|-------------|---------|
| `grid-column` | Shorthand for start/end | `1 / span 2` |
| `grid-row` | Shorthand for start/end | `2 / 3` |
| `justify-self` | Align item inside its cell (inline) | `center` |
| `align-self` | Align item inside its cell (block) | `end` |

---

## 📦 Flexbox

### Basic Syntax
```css
.container {
  display: flex;
  /* or display: inline-flex; */
}
```

### Container Properties

#### 🧭 Flow & Direction
| Property | Description | Values |
|----------|-------------|--------|
| `flex-direction` | Direction of the main axis | `row` (default), `column`, `row-reverse`, `column-reverse` |
| `flex-wrap` | Whether items can wrap to new lines | `nowrap` (default), `wrap`, `wrap-reverse` |
| `flex-flow` | Shorthand for direction and wrap | `row wrap` |

#### 📏 Alignment
| Property | Description | Key Values |
|----------|-------------|------------|
| `justify-content` | Alignment along **Main Axis** | `flex-start`, `center`, `space-between`, `space-evenly` |
| `align-items` | Alignment along **Cross Axis** | `stretch` (default), `flex-start`, `center`, `baseline` |
| `align-content` | Spacing of **multi-line** content | `flex-start`, `center`, `space-between` |

### Item Properties (Children)

#### 📐 Sizing & Flexibility
| Property | Description | Default |
|----------|-------------|---------|
| `flex-grow` | Ability to grow if extra space exists | `0` (don't grow) |
| `flex-shrink` | Ability to shrink if space is tight | `1` (shrink allowed) |
| `flex-basis` | Initial main size before distribution | `auto` |
| `flex` | Shorthand for grow, shrink, basis | `0 1 auto` |

#### 📍 Alignment & Order
| Property | Description |
|----------|-------------|
| `align-self` | Overrides generic `align-items` for this item |
| `order` | Visual order of the item (integers) |
