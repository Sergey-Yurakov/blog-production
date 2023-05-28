import { ReactNode, useCallback } from 'react';

import { genericTypedMemo } from '@/shared/const/genericTypedMemo';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { Card } from '../Card/Card';
import { Flex, FlexAlign, FlexDirection } from '../Stack/Flex/Flex';

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
    direction?: FlexDirection;
    align?: FlexAlign;
}

export const Tabs = genericTypedMemo(<T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, direction = 'row', align = 'center', onTabClick } = props;

    const clickHandle = useCallback(
        (tab: TabsItem<T>) => () => {
            onTabClick?.(tab);
        },
        [onTabClick],
    );

    return (
        <Flex direction={direction} gap="8" align={align} className={cn(cl.Tabs, {}, [className])}>
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        data-testid={`Tabs.${tab.value}`}
                        className={cn(cl.tab, { [cl.selected]: isSelected }, [])}
                        key={tab.value}
                        variant={isSelected ? 'light' : 'normal'}
                        onClick={clickHandle(tab)}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
