import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cl from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        alt,
        src,
        size,
        className,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    const mods: Mods = {};

    return (
        <img
            src={src}
            alt={alt}
            className={cn(cl.Avatar, mods, [className])}
            style={styles}
        />
    );
};
