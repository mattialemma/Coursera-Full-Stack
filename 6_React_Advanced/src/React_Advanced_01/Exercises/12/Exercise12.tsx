import { useState } from "react";
import { RadioGroup, RadioOption } from "./Radio/Radio";
import "./App.css";

function Exercise12() {
    const [selected, setSelected] = useState("");

    return (
        <div className="App p-8">
            <h2 className="text-xl font-bold mb-4">How did you hear about Little Lemon?</h2>
            <RadioGroup onChange={setSelected} selected={selected}>
                <RadioOption value="social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button
                className={`mt-4 px-6 py-2 rounded ${!selected ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-800 text-white'}`}
                disabled={!selected}
                onClick={() => alert(`Submitted: ${selected}`)}
            >
                Submit
            </button>
        </div>
    );
}

export default Exercise12;
