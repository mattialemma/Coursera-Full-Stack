# UseEffect

By default, if no second argument is provided to the useEffect function, the effect will run after every render.

```jsx
useEffect(() => { 
   document.title = 'Little Lemon';
 }); 
```
However, that may cause performance issues, especially if your side effects are computationally intensive. A way to instruct React to skip applying an effect is passing an array as a second parameter to useEffect.

In the below example, the integer variable version is passed as the second parameter. That means that the effect will only be re-run if the version number changes between renders.

```jsx
useEffect(() => { 
  document.title = `Little Lemon, v${version}`;
}, [version]); // Only re-run the effect if version changes 
```
## Use multiple Effects to Separate Concerns

```jsx
function MenuPage(props) { 
  const [data, setData] = useState([]); 

  useEffect(() => { 
    document.title = 'Little Lemon'; 
  }, []); 

  useEffect(() => { 
    fetch(`https://littlelemon/menu/${id}`) 
      .then(response => response.json()) 
      .then(json => setData(json)); 
  }, [props.id]); 

  // ... 
} 
```

## Effects with Cleanup

```jsx
function LittleLemonChat(props) { 
  const [status, setStatus] = useState('offline'); 

  useEffect(() => { 
    LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')) 

    return () => { 
      setStatus('offline'); 
      LemonChat.unsubscribeFromMessages(props.chatId); 
    }; 
  }, []); 

  // ... 
} 
```

---

## Complete example

```jsx

import { useEffect, useState } from "react";

function LittleLemonChat({ chatId }) {
  const [status, setStatus] = useState("offline");

  useEffect(() => {
    console.log("Mount or chatId change → subscribe");

    LemonChat.subscribeToMessages(chatId, () => { // External side effect
      setStatus("online");
    });

    return () => {
      console.log("Cleanup → unsubscribe");
      LemonChat.unsubscribeFromMessages(chatId);
      setStatus("offline");
    };
  }, [chatId]);

  return <h1>Status: {status}</h1>;
}


// Father component

function App() {
  const [showChat, setShowChat] = useState(true);
  const [room, setRoom] = useState("room1");

  return (
    <>
      <button onClick={() => setShowChat(prev => !prev)}>
        Toggle Chat
      </button>

      <button onClick={() => setRoom("room2")}>
        Switch Room
      </button>

      {showChat && <LittleLemonChat chatId={room} />}
    </>
  );
}
```

When chatId changes, React first runs the cleanup function from the previous effect. This unsubscribes from the old chat and optionally sets the status to "offline". Then React runs the effect again with the new chatId, subscribing to the new chat.

It can also work with internal functions

```jsx
function LittleLemonChat({ chatId }) {
  const [status, setStatus] = useState("offline");

  function subscribe(id, callback) {
    console.log("Subscribed to", id);
  }

  function unsubscribe(id) {
    console.log("Unsubscribed from", id);
  }

  useEffect(() => {
    subscribe(chatId, () => setStatus("online"));

    return () => {
      unsubscribe(chatId);
    };
  }, [chatId]);

  return <h1>Status: {status}</h1>;
}
```

---

### When to use useEffect

[] = only run once (the first time the component mounts)
without it, it will run every time the component re-renders
[prop] = run when the prop changes