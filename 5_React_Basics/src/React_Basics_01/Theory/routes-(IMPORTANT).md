# Routes

In the `index.tsx` file we have the following code:

```typescript
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
```

In the `App.tsx` file we have the following code:

```typescript
import Homepage from './Homepage';
import About from './About';
import {Routes, Route, Link} from 'react-router-dom';

export default function App() {
    return (
        <div className="App">
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
    );
}


```


---

# Why use Link instead of <a> tag?

In a React application, navigation should be fast and seamless, without reloading the entire page. Using the traditional <a> tag triggers a full page reload every time a link is clicked, which can slow down the experience and break the single-page application flow.

The Link component from React Router enables client-side navigation, allowing users to move between different views without refreshing the page. This keeps the application smooth, faster, and more user-friendly.