/*

Implementing mouse position tracking with HOC

*/


import { useState, useEffect } from "react";

const PanelMouseLoggerImpl = ({ mousePosition }) => {
    if (!mousePosition) return null;
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-200 mb-5 text-slate-800 shadow-sm">
            <h2 className="font-bold text-lg mb-2 text-blue-600">Panel Mouse Logger</h2>
            <p>X: {Math.round(mousePosition.x)}</p>
            <p>Y: {Math.round(mousePosition.y)}</p>
        </div>
    );
}

const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
        useEffect(() => {
            const handleMouseMove = (e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            };
            window.addEventListener("mousemove", handleMouseMove);
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }, []);
        return <WrappedComponent mousePosition={mousePosition} {...props} />;
    };
};

const PanelMouseLogger = withMousePosition(PanelMouseLoggerImpl);

const PointMouseLoggerImpl = ({ mousePosition }) => {
    if (!mousePosition) return null;
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-200 text-slate-800 shadow-sm">
            <h2 className="font-bold text-lg mb-2 text-purple-600">Point Mouse Logger</h2>
            <p>X: {Math.round(mousePosition.x)}</p>
            <p>Y: {Math.round(mousePosition.y)}</p>
        </div>
    );
}

const PointMouseLogger = withMousePosition(PointMouseLoggerImpl);

export default function App() {
    return (
        <div style={{ padding: "40px" }}>
            <h1 className="text-2xl font-bold mb-5 text-slate-900">Mouse Position Tracking (HOC)</h1>
            <p className="text-gray-600 mb-6 max-w-2xl">
                This exercise demonstrate how to use Higher-Order Components (HOC) to share mouse tracking logic.
            </p>
            <PanelMouseLogger />
            <PointMouseLogger />
        </div>
    );
}
