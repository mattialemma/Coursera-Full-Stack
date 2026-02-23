/*

Implementing scroller position with render props

*/

import { useEffect, useState } from "react";

const ScrollPosition = ({ render }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return render({ scrollPosition });
};

const PanelScrollLogger = () => {
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-5 text-slate-800 shadow-sm">
            <h2 className="font-bold text-lg mb-2 text-blue-600">Panel Scroll Logger</h2>
            <ScrollPosition
                render={({ scrollPosition }) => (
                    <p>Vertical Scroll: {Math.round(scrollPosition)}px</p>
                )}
            />
        </div>
    );
};

const PointScrollLogger = () => {
    return (
        <ScrollPosition
            render={({ scrollPosition }) => (
                <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                    Scroll: {Math.round(scrollPosition)}px
                </div>
            )}
        />
    );
};

function Exercise14() {
    return (
        <div className="p-10 min-h-[150vh]">
            <h1 className="text-2xl font-bold mb-5 text-slate-900">Scroll Position Tracking (Render Props)</h1>
            <p className="text-gray-600 mb-6 max-w-2xl">
                This exercise demonstrates how to use <strong>Render Props</strong> to share scroll tracking logic.
                Scroll down to see the effect!
            </p>
            <PanelScrollLogger />
            <PointScrollLogger />
        </div>
    );
}

export default Exercise14;