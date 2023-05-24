import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Buttton';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandle = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(
                saveJsonSettings({
                    theme: newTheme,
                }),
            );
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button onClick={onToggleHandle} className={cn('', {}, [className])} theme={ButtonTheme.CLEAR}>
            <Icon Svg={ThemeIcon} width={40} height={40} inverted />
        </Button>
    );
});
