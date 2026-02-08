import { useState } from 'react';

export default function Main() {
    const [word, setWord] = useState('Oh');

    function handleClick() {
        if (word === 'Oh')
            setWord(word + ' Hey!');
        else
            setWord('Oh');
    }

    return (
        <div className='m-5'>
            <Heading message={word} />
            <button className='btn' onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

function Heading(props) {
    return (
        <>
            <h1>{props.message}</h1>
        </>
    );
}