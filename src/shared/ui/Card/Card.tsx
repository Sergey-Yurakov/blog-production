import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    maxWidth?: boolean;
}

export const Card = memo((props: CardProps) => {
    const { className, children, theme = CardTheme.NORMAL, maxWidth, ...otherProps } = props;

    const mods: Mods = {
        [cl.maxWidth]: maxWidth,
    };

    return (
        <div className={cn(cl.Card, mods, [className, cl[theme]])} {...otherProps}>
            {children}
        </div>
    );
});
