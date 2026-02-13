import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (comment.length <= 10 && Number(score) <= 5) {
            alert("Please enter a comment with at least 10 characters and a score of at least 5");
            return;
        }
        console.log("Form submitted");
        console.log("The score is " + score);
        console.log("The comment is " + comment);
        setScore(0);
        setComment("");
    }

    return (
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="input-group">
                        <legend>Score: {score}</legend>
                        <input name="score"
                            id="score"
                            type="range"
                            min="0" max="100"
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <legend>Comment:</legend>
                        <input name="comment"
                            id="comment"
                            type="text"
                            value={comment}
                            placeholder="Leave a comment"
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit now</button>
                </fieldset>
            </form>
        </div>
    );
}