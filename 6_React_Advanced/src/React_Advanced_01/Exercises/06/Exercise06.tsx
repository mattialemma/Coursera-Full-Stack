import { useTheme, ThemeProvider } from "./ThemeContext";
import React from "react";

const Switch = React.memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="switch-container">
            <input
                type="checkbox"
                className="switch-input"
                checked={theme === "dark"}
                onChange={toggleTheme}
            />
            <span className="switch-slider" />
        </label>
    );
});

const ThemeConsumer = React.memo(() => {
    const { theme } = useTheme();

    return (
        <div
            className={`p-5 transition-colors duration-300 ${theme === "light"
                ? "bg-white text-gray-800"
                : "bg-gray-800 text-white"
                }`}
        >
            <div className="flex gap-10 items-center-top pt-5 mb-4 h-screen">
                <h2 className="text-2xl font-bold">Theme Context Switch</h2>
                <Switch />
            </div>
            <p>
                Current theme:{" "}
                <span className="font-semibold uppercase">{theme}</span>
            </p>
        </div>
    );
});

export default function Exercise06() {
    return (
        <ThemeProvider>
            <ThemeConsumer />
        </ThemeProvider>
    );
}


/*
    But in this example Switch and ThemeConsumer used "useTheme"
    so they will re-render every time the theme changes.
*/