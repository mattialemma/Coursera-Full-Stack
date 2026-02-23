# Data Fetching Using Hooks in React

## Overview

Fetching data from a third-party API in React is considered a side effect.
Since side effects must not run during rendering, React provides the `useEffect` hook to handle them properly.

API calls are asynchronous and may succeed, fail, or be delayed. For this reason, they must be managed carefully using state and conditional rendering.

## Basic Example

```jsx
import { useState, useEffect } from "react";

export default function App() {
  const [btcData, setBtcData] = useState(null);

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => response.json())
      .then(jsonData => setBtcData(jsonData.bpi.USD))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Current BTC/USD data</h1>
      {btcData && (
        <>
          <p>Code: {btcData.code}</p>
          <p>Symbol: {btcData.symbol}</p>
          <p>Rate: {btcData.rate}</p>
          <p>Description: {btcData.description}</p>
          <p>Rate Float: {btcData.rate_float}</p>
        </>
      )}
    </div>
  );
}
```

### How It Works

*   `useEffect(() => {}, [])` runs **once** when the component mounts.
*   `fetch()` is asynchronous and returns a Promise.
*   When data arrives, `setBtcData()` updates state.
*   Updating state triggers a re-render.
*   Conditional rendering ensures content appears only when data exists.

## Handling Loading State

Because API responses may be delayed, a simple conditional pattern can be used:

```jsx
return btcData ? (
  <div>
    <h1>Data Returned</h1>
    <h2>{btcData.rate}</h2>
  </div>
) : (
  <h1>Data pending...</h1>
);
```

*   Initial state is `null`, so the loading message appears.
*   Once the fetch resolves, the component re-renders with the data.

## Key Concepts

*   **Data fetching is a side effect**
*   Side effects belong inside `useEffect`
*   React components must stay pure
*   State updates trigger re-renders
*   Conditional rendering handles async behavior

## Summary

Although React rendering is synchronous and pure, it can safely perform asynchronous operations through `useEffect`. Properly managing state and loading behavior ensures predictable and clean data-driven components.