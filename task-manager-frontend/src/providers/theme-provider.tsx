import { useEffect, useState, type ReactNode } from "react";
import ThemeContext from "./theme-context";

interface Props {
    children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
    const [dark, setDark] = useState<boolean>(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    const toggle = () => setDark((prev) => !prev);
    const setTheme = (theme: "light" | "dark") => {
        setDark(theme === "dark");
    };

    return (
        <ThemeContext.Provider value={{ dark, toggle, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
