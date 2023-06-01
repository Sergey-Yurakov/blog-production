import { memo, useCallback, useState } from 'react';

import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Buttton';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

import cl from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => setIsOpen(true), []);

    const onCloseDrawer = useCallback(() => setIsOpen(false), []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
            on={<Icon Svg={NotificationIcon} onClick={onOpenDrawer} clickable />}
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <PopoverDeprecated
                            className={cn(cl.NotificationButton, {}, [className])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cl.notifications} />
                        </PopoverDeprecated>
                    }
                    on={
                        <Popover
                            className={cn(cl.NotificationButton, {}, [className])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cl.notifications} />
                        </Popover>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer lazy isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
