// useReducer

import { useReducer } from "react";

type State = {
    count: number;
};

type Action = {
    type: "increment" | "decrement";
};

const initialState: State = {
    count: 0,
};

function reducer(state: State, action: Action): State {
    switch (action.type) { // or if (action.type === "increment") { ... } else if (action.type === "decrement") { ... }
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Counter: {state.count}</h1>
            <div className="flex gap-2">
                <button
                    className="btn"
                    onClick={() => dispatch({ type: "increment" })}
                >
                    Increment
                </button>
                <button
                    className="btn bg-red-600 hover:bg-red-700"
                    onClick={() => dispatch({ type: "decrement" })}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default App;
