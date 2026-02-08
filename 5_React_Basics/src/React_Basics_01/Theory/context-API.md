# Context API Explanation

The **Context API** is a React feature that allows you to share data (state) across your entire component tree without having to pass props down manually at every level (avoiding "Prop Drilling").

Think of it like a **Broadcast System**:
1.  **Context**: The radio frequency/channel.
2.  **Provider**: The radio station broadcasting the music (data).
3.  **Consumer (useContext)**: The radio receiving the music.

## How it works in our "Meals" Example

### 1. Creating the Context (The Channel)
In `MealsProvider.tsx`, we create the "channel" using `createContext`. This is what components will "tune into".

```javascript
const MealsContext = createContext(null);
```

### 2. The Provider (The Broadcaster)
The `MealsProvider` component holds the actual data (the state `meals`) and "broadcasts" it to all its children.

```javascript
const MealsProvider = ({ children }) => {
    // This holds the data
    const [meals, setMeals] = useState(todayMeals);

    // This broadcasts the data to all 'children' inside it
    return (
        <MealsContext.Provider value={{ meals }}>
            {children}
        </MealsContext.Provider>
    );
};
```

Any component wrapped inside `<MealsProvider> ... </MealsProvider>` (like we did in `Exercise09.tsx`) can access this data.

### 3. The Hook (The Receiver)
We created a custom hook `useMeals` to make it easy for components to access the data.

```javascript
export const useMeals = () => useContext(MealsContext);
```

### 4. Consuming the Data (Listening)
Finally, components like `MealsList` and `Counter` just need to call the hook to get the data directly. They don't need props from their parent!

**MealsList.tsx:**
```javascript
const MealsList = () => {
    const { meals } = useMeals(); // Gets the list directly!
    // ... renders the list
};
```

**Counter.tsx:**
```javascript
const Counter = () => {
    const { meals } = useMeals(); // Gets the list directly!
    // ... counts the items
};
```

This makes your code cleaner because `App.tsx` or `Exercise09.tsx` doesn't need to know about `meals` to pass them down. It just sets up the Provider.
