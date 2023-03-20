import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cl from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string,
    text?: string,
    theme?: TextTheme;
    align?:TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mods: Mods = {
        [cl[theme]]: true,
        [cl[align]]: true,
        [cl[size]]: true,
    };

    return (
        <div className={cn(cl.Text, mods, [className])}>
            {title && <p className={cl.title}>{title}</p>}
            {text && <p className={cl.text}>{text}</p>}
        </div>
    );
});
