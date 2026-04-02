import { createContext } from "react";

interface ThemeContextType {
    dark: boolean;
    toggle: () => void;
    setTheme: (theme: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
