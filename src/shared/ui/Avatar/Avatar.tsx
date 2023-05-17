import { CSSProperties, useMemo } from 'react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import UserIcon from '../../assets/icons/user-32-32.svg';
import { AppImage } from '../../ui/AppImage';
import { Icon } from '../../ui/Icon';
import { Skeleton } from '../../ui/Skeleton';

import cl from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const { alt, src, size = 100, className, fallbackInverted } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const mods: Mods = {};
    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

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
