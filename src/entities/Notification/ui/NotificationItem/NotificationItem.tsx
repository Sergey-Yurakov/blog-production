import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import { Notification } from '../../model/types/notification';

import cl from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const { title, description, href } = item;

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <CardDeprecated
                    className={cn(cl.NotificationItem, {}, [className])}
                    theme={CardTheme.OUTLINED}
                >
                    <TextDeprecated title={title} text={description} />
                </CardDeprecated>
            }
            on={
                <Card className={cn(cl.NotificationItem, {}, [className])}>
                    <Text title={title} text={description} />
                </Card>
            }
        />
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
