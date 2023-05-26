import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { SidebarItemType } from '../../types/sidebar';

import cl from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <AppLinkDeprecated
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                    className={cn(cl.item, { [cl.collapsed]: collapsed })}
                >
                    <item.Icon className={cl.icon} />
                    <span className={cl.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
            on={
                <AppLink
                    activeClassName={cl.active}
                    to={item.path}
                    className={cn(cl.itemRedesigned, { [cl.collapsedRedesigned]: collapsed })}
                >
                    <Icon Svg={item.Icon} />
                    <span className={cl.link}>{t(item.text)}</span>
                </AppLink>
            }
        />
    );
});
