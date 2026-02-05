/**
 * Exercise 02: Counter with useState
 * 
 * TASK: Understand how useState works by playing with the counter.
 */

import { useState } from 'react';

function Exercise02() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-orange-600">🏋️ Exercise 02: useState Hook</h1>

            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 font-medium">📝 Task:</p>
                <p className="text-yellow-700">Use the buttons to change the counter value. Observe how React updates the UI!</p>
            </div>

            <div className="text-center p-8 bg-gray-100 rounded-xl">
                <p className="text-6xl font-bold text-gray-800 mb-6">{count}</p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={decrement}
                        className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                    >
                        - Decrement
                    </button>
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        Reset
                    </button>
                    <button
                        onClick={increment}
                        className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
                    >
                        + Increment
                    </button>
                </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-blue-700 font-medium">💡 How it works:</p>
                <p className="text-blue-600 text-sm">
                    <code className="bg-blue-100 px-1 rounded">useState(0)</code> creates a state variable starting at 0.
                    When you call <code className="bg-blue-100 px-1 rounded">setCount(newValue)</code>, React re-renders the component with the new value.
                </p>
            </div>
        </div>
    );
}

export default Exercise02;
