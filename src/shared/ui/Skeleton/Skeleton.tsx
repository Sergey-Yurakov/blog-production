import { CSSProperties, memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cl from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, width, height, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={cn(cl.Skeleton, {}, [className])} style={styles} />;
});
