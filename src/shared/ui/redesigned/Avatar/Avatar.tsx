import { CSSProperties, useMemo } from 'react';

import UserIcon from '@/shared/assets/icons/user-32-32.svg';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cl from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const { alt, src, size = 100, className } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const mods: Mods = {};
    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            className={cn(cl.Avatar, mods, [className])}
            style={styles}
        />
    );
};
