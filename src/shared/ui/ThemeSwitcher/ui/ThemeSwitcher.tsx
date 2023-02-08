import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cl from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Buttton/Button';
import { ThemeButton } from 'shared/ui/Buttton/Button';


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {

    const { theme, togleTheme } = useTheme()

    return (
        <Button
            onClick={togleTheme}
            className={cn(cl.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}