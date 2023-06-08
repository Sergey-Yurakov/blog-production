import { memo } from 'react';

import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cl from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;

    // todo: добавить появление кнопки ScrollToTopButton, после прокрутки страницы самой
    // можно сделать отдельный хук, который будет смотреть, есть ли сейчас прокрутка и
    // возвращать true, если есть
    return (
        <VStack
            justify="center"
            align="center"
            max
            className={cn(cl.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
