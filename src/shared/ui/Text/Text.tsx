import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cl from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
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

type HeaderTagType = 'h1' | 'h2' | 'h3';
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cl[theme]]: true,
        [cl[align]]: true,
        [cl[size]]: true,
    };

    return (
        <div className={cn(cl.Text, mods, [className])}>
            {title && <HeaderTag className={cl.title}>{title}</HeaderTag>}
            {text && <p className={cl.text}>{text}</p>}
        </div>
    );
});
