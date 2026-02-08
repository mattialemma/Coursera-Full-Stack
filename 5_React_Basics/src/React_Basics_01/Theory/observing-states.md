# Observing States

```jsx
import { useState } from 'react';

export default function Main() {
  const [word, setWord] = useState('');

  return (
    <>
      <Heading message={word + ' Hey!'} />
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </>
  );
}

function Heading(props) {
    return (
        <>
            <h1>{props.message}</h1>
        </>
    );
}


```


