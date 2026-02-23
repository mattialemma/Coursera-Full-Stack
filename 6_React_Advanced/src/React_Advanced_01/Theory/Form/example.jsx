import { useState } from "react";

/* Form without state (uncontrolled component) */
function Form() {
    return (
        <div className="form">
            <h1>Form</h1>
            <form>
                <fieldset>
                    <div className="input-group">
                        <legend>Name</legend>
                        <input type="text" placeholder="Enter your name" name="name" />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}


/* Form with state (controlled component) */

function FormWithState() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default behavior of the form submission (page reload)
        setName(""); // Clears the input field
        console.log("The name is " + name);
    }

    return (
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="input-group">
                        <legend htmlFor="name">Name</legend>
                        <input
                            id="name" // This is used to link the input field to the legend
                            type="text"
                            placeholder="Enter your name"
                            name="name" // This is used to identify the input field
                            value={name}
                            onChange={(e) => setName(e.target.value)} // This is used to update the state
                        />
                    </div>
                    <button disabled={!name} type="submit">Submit</button> {/* This is used to disable the button if the input field is empty */}
                </fieldset>
            </form>
        </div>
    );
}

