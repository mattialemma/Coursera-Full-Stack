import { useTheme, ThemeProvider } from "./ThemeContext";

const Switch = () => {
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
};

export default function Exercise05() {
    return (
        <ThemeProvider>
            <ThemeConsumer />
        </ThemeProvider>
    );
};

const ThemeConsumer = () => {
    const { theme } = useTheme();
    return (
        <div className={`p-5 transition-colors duration-300 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
            <div className="flex gap-10 items-center-top pt-5  mb-4 h-screen">
                <h2 className="text-2xl font-bold">Theme Context Switch</h2>
                <Switch />
            </div>
            <p>Current theme: <span className="font-semibold uppercase">{theme}</span></p>
        </div>
    );
}


