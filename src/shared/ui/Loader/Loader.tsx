import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cl from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={cn(cl.Loader, {}, [className])}>
        <div />
        <div />
    </div>
);
