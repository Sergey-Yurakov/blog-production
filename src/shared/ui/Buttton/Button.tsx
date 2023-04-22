import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';
import cl from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        square,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cl.square]: square,
        [cl.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={cn(cl.Button, mods, [className, cl[theme], cl[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
