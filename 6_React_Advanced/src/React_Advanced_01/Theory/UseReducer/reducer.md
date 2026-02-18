# UseReducer

`useReducer` is a React Hook that is used for state management. 
It is an alternative to `useState`.

### When to use useReducer?
`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. It is also useful when you want to optimize performance for components that trigger deep updates because you can pass `dispatch` down instead of callbacks.

### How it works
It accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method.

**Syntax:**
`const [state, dispatch] = useReducer(reducer, initialArg, init);`

1. **Reducer Function**: A function that determines how the state changes. It takes the current `state` and an `action` as arguments and returns the new state.
2. **Dispatch**: A function you call to update the state. You pass an `action` object (usually with a `type` property) to it.
3. **State**: The current state value.

In the example below, we manage a "wallet" state. The `reducer` function handles different action types ('buy_ingredients', 'sell_a_meal', etc.) to update the money amount accordingly.

```jsx
import { useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === 'buy_ingredients') return { money: state.money - 10 };
    if (action.type === 'sell_a_meal') return { money: state.money + 10 };
    if (action.type === 'celebrity_visit') return { money: state.money + 5000 };
    return state;
}

export default function Exercise10() {
    const initialState = { money: 100 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center font-bold text-2xl">Wallet: {state.money}</h1>
            <div className="flex gap-4">
                <button className="btn" onClick={() => dispatch({ type: 'buy_ingredients' })}>Shopping for veggies!</button>
                <button className="btn" onClick={() => dispatch({ type: 'sell_a_meal' })}>Sell a meal</button>
                <button className="btn" onClick={() => dispatch({ type: 'celebrity_visit' })}>Celebrity visit</button>
            </div>
        </div>
    );
}

```


### useState vs useReducer

**useState** is best used on less complex data.
- While it's possible to use any kind of data structure, it's better suited for **primitive data types** (strings, numbers, booleans).
- **Pros:** Easier to implement for simple use cases (e.g., toggling a variable).
- **Cons:** Can become hard to maintain as state complexity grows.

**useReducer** is best used on more complex data.
- Specifically useful for **arrays or objects**.
- **Pros:** Once setup is complete, it gets easier to extend the code based on new requirements. Great for complex state logic.
- **Cons:** Requires more prep work and boilerplate code to begin with.

### Choosing between them
There is no clear-cut rule like "if an object has 3 properties, use useReducer". It's better to visualize it as a **spectrum**:
- **Left side:** `useState` for simple primitives and small updates.
- **Right side:** `useReducer` for large state-holding objects and complex transitions.

Sometimes you might use `useState` for an object if it feels simpler, or `useReducer` for cleaner logic even with smaller states. The key is to keep your code **simple to understand, collaborate on, and maintain**.
