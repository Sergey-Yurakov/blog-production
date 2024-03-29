import { useContext, useEffect } from 'react';

import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme || Theme.LIGHT;
    }, [theme]);

    // внутри функции передаем еще коллбэк, чтобы более гибко управлять сохранением темы
    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        // document.body.className = newTheme;
        saveAction?.(newTheme);
        // const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        // setTheme(newTheme);
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
