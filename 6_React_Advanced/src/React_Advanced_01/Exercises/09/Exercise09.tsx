import { useState, useEffect } from 'react';

export default function Exercise09() {
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        document.title = toggle ? "Hello BRO!" : "hey...";
    }, [toggle]);

    /*
    [] = only run once (the first time the component mounts)
     without it, it will run every time the component re-renders
    */

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Using the useEffect hook</h1>
            <button className="btn" onClick={clickHandler}>Toggle</button>
            {toggle && <p className="text-2xl text-red-500 text-center">Hello BRO!</p>}
        </div>
    );
}