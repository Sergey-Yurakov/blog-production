import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    maxWidth?: boolean;
    padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        maxWidth,
        padding = '8',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cl.maxWidth]: maxWidth,
    };

    const paddingsClass = mapPaddingToClass[padding];

    return (
        <div
            className={cn(cl.Card, mods, [className, cl[variant], cl[paddingsClass]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
