import { useContext } from "react";
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

interface UseThemeResult {
    theme: Theme;
    togleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const togleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return { theme, togleTheme }
}
