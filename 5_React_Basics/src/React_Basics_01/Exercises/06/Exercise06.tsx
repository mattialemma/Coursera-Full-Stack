import { useState } from 'react';

export default function InputComponent() {
    const [inputValue, setInputValue] = useState('Hello');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div className="m-5">
            <input className="border border-[#525252] rounded-lg p-2"
                type="text" value={inputValue} onChange={handleChange} />

            <p>Input value: {inputValue}</p>
            <button className="btn" onClick={() => setInputValue('Hello')}>Reset</button>
        </div>
    );
}


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

/*
    useRef is a hook that allows you to create a mutable reference that can persist across renders.
    It is used to store a reference to a DOM element or any other value that you want to persist across renders.
*/

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

//  When user clicks on the button, the input element will be focused (the cursor will be in the input element)

