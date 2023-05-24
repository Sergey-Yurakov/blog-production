import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cl from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return <div className={cn(cl.Overlay, {}, [className])} onClick={onClick} />;
});
