import {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
    ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = useCallback(() => { // useCallback is used to memoize the function and not recreate it on every render
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    const value = useMemo( // useMemo is used to memoize the object and not recreate it on every render
        () => ({ theme, toggleTheme }),
        [theme, toggleTheme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};