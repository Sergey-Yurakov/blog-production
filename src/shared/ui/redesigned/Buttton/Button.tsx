import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    variant?: ButtonVariant;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean;
    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
    /**
     * добавляем иконку слева/справа в кнопку
     */
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        square,
        variant = 'outline',
        size = 'm',
        disabled,
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cl.square]: square,
        [cl.disabled]: disabled,
        [cl.fullWidth]: fullWidth,
        [cl.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={cn(cl.Button, mods, [className, cl[variant], cl[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {addonLeft && <div className={cl.addonLeft}>{addonLeft}</div>}
            {children}
            {addonRight && <div className={cl.addonRight}>{addonRight}</div>}
        </button>
    );
});
