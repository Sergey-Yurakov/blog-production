import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import { Notification } from '../../model/types/notification';

import cl from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const { title, description, href } = item;

    const content = (
        <Card
            className={cn(cl.NotificationItem, {}, [className])}
            theme={CardTheme.OUTLINED}
        >
            <Text title={title} text={description} />
        </Card>
    );

    if (href) {
        return (
            <a className={cl.link} href={href} target="_blank" rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
