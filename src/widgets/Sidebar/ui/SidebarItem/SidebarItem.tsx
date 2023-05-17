import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

import { SidebarItemType } from '../../types/sidebar';

import cl from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { Icon, text, path, authOnly } = item;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={path} className={cn(cl.item, { [cl.collapsed]: collapsed })}>
            <Icon className={cl.icon} />
            <span className={cl.link}>{t(text)}</span>
        </AppLink>
    );
});
