# 2️⃣ HTML and CSS in Depth

**Completion Date**: ---
**Status**:  Work in progress

## Link, Visited, Hover, Active (LVHA)

In CSS, when two rules have the same specificity,
 **the one written last wins**.

All these pseudo-classes have the **same specificity**, so only the **order** matters:

- `a:link`
- `a:visited`
- `a:hover`
- `a:active`

###  The Problem
If you define `a:link` after `a:hover`:

```css
a:hover { color: red; }
a:link  { color: blue; }
```

When you hover over the link:
1. The link matches `:hover`.
2. But it is also a `:link`.
3. Since `a:link` is written **after**, it overrides `a:hover`.
 **Result**: Hover does NOT work.

###  The Correct Order (LVHA)
To ensure everything works as expected, use the **LVHA** order:

```css
a:link    { color: blue; }
a:visited { color: purple; }
a:hover   { color: red; }
a:active  { color: green; }
```
