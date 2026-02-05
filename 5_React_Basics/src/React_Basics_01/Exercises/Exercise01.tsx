/**
 * Exercise 01: Create Your First Component
 * 
 * TASK: Modify the WelcomeMessage component to display your name.
 */

import { useState } from 'react';

function WelcomeMessage({ name }: { name: string }) {
    return (
        <div className="p-4 bg-green-100 rounded-lg border border-green-300">
            <h2 className="text-lg font-bold text-green-800">Welcome, {name}!</h2>
            <p className="text-green-700">You created your first React component! 🎉</p>
        </div>
    );
}

function Exercise01() {
    const [userName, setUserName] = useState('');

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-purple-600">🏋️ Exercise 01: Props</h1>

            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 font-medium">📝 Task:</p>
                <p className="text-yellow-700">Type your name below and see how props work!</p>
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Your Name:</label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
            </div>

            {userName && <WelcomeMessage name={userName} />}

            {!userName && (
                <p className="text-gray-500 italic">Enter your name above to see the component in action.</p>
            )}
        </div>
    );
}

export default Exercise01;
