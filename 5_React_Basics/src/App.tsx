import { useState } from 'react'

// Import Exercise components
// Import Exercise components
import Exercise01 from './React_Basics_01/Exercises/01/Exercise01'
import Exercise02 from './React_Basics_01/Exercises/02/Exercise02'
import Exercise03 from './React_Basics_01/Exercises/03/Exercise03'

type View = 'menu' | 'ex01' | 'ex02' | 'ex03';

function App() {
    const [currentView, setCurrentView] = useState<View>('menu');

    const goBack = () => setCurrentView('menu');

    // Main menu
    if (currentView === 'menu') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-primary">🚀 React Basics Hub</h1>
                    <p className="text-gray-300 text-center mb-10">Select an exercise to start learning</p>

                    {/* React Basics 01 Section */}
                    <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">📘 React Basics 01</h2>

                        <p className="text-gray-400 mb-4 text-sm">
                            📖 Theory files are in <code className="bg-white/20 px-2 py-1 rounded">src/React_Basics_01/Theory/*.md</code>
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {/* Exercise 01 Card */}
                            <button
                                onClick={() => setCurrentView('ex01')}
                                className="p-4 bg-purple-600 hover:bg-purple-500 rounded-lg transition-all hover:scale-105 text-left"
                            >
                                <h3 className="font-bold mb-1">🏋️ Exercise 01</h3>
                                <p className="text-sm text-purple-200">First Component</p>
                            </button>

                            {/* Exercise 02 Card */}
                            <button
                                onClick={() => setCurrentView('ex02')}
                                className="p-4 bg-orange-600 hover:bg-orange-500 rounded-lg transition-all hover:scale-105 text-left"
                            >
                                <h3 className="font-bold mb-1">🏋️ Exercise 02</h3>
                                <p className="text-sm text-orange-200">useState Hook</p>
                            </button>

                            {/* Exercise 03 Card */}
                            <button
                                onClick={() => setCurrentView('ex03')}
                                className="p-4 bg-green-600 hover:bg-green-500 rounded-lg transition-all hover:scale-105 text-left"
                            >
                                <h3 className="font-bold mb-1">🏋️ Exercise 03</h3>
                                <p className="text-sm text-green-200">Exercise 03</p>
                            </button>
                        </div>
                    </div>

                    {/* Mattia Lemma */}
                    <div className="bg-white/5 backdrop-blur rounded-xl p-6 opacity-60">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-400">📗 React Basics</h2>
                        <p className="text-gray-500">Mattia Lemma</p>
                    </div>
                </div>
            </div>
        );
    }

    // Render selected view with back button
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
                <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                    ← Back to Menu
                </button>
            </header>

            <main className="py-6">
                {currentView === 'ex01' && <Exercise01 />}
                {currentView === 'ex02' && <Exercise02 />}
                {currentView === 'ex03' && <Exercise03 />}
            </main>
        </div>
    );
}

export default App
