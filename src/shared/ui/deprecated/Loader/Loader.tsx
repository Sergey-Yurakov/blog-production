import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cl from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Loader = ({ className }: LoaderProps) => (
    <div className={cn(cl.Loader, {}, [className])}>
        <div />
        <div />
    </div>
);
