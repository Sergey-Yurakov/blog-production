import { ReactNode, useCallback } from 'react';

import { genericTypedMemo } from '@/shared/const/genericTypedMemo';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { Card, CardTheme } from '../Card/Card';

import cl from './Tabs.module.scss';

export interface TabsItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabsItem<T>[];
    value: string;
    onTabClick: (tab: TabsItem<T>) => void;
}

export const Tabs = genericTypedMemo(<T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabsItem<T>) => () => {
        onTabClick?.(tab);
    }, [onTabClick]);

    return (
        <div className={cn(cl.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={cl.tab}
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
