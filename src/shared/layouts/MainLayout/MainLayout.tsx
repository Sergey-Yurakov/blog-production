import { memo, ReactElement } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cl from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, header, toolbar, content, sidebar } = props;

    return (
        <div className={cn(cl.MainLayout, {}, [className])}>
            <div className={cl.sidebar}>{sidebar}</div>
            <div className={cl.content}>{content}</div>
            <div className={cl.rightbar}>
                <div className={cl.header}>{header}</div>
                <div className={cl.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});
