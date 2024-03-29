import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cl.justifyStart,
    end: cl.justifyEnd,
    center: cl.justifyCenter,
    between: cl.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cl.alignStart,
    end: cl.alignEnd,
    center: cl.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    column: cl.directionColumn,
    row: cl.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
    4: cl.gap4,
    8: cl.gap8,
    16: cl.gap16,
    24: cl.gap24,
    32: cl.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    wrap?: FlexWrap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'center',
        gap,
        max,
        wrap = 'nowrap',
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        cl[wrap],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cl.max]: max,
    };

    return (
        <div className={cn(cl.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
