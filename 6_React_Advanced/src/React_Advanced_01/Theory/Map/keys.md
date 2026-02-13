# Keys

keys are used to identify unique elements in a list that help React to identify which items have changed, are added, or are removed.

## Example

```jsx
<ul>
    <li key="item1">Item 1</li>
    <li key="item2">Item 2</li>
    <li key="item3">Item 3</li>
</ul>
```

If you add an element on the top of the list React doesn't render the others, it will render the new one

```jsx
<ul>
    <li key="item0">Item 0</li> /* New element */
    <li key="item1">Item 1</li>
    <li key="item2">Item 2</li>
    <li key="item3">Item 3</li>
</ul>
```

---

Don't use index as a key if the list can change order!

---

