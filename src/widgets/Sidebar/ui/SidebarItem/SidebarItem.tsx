import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { SidebarItemType } from '../../model/items';
import cl from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { Icon, text, path } = item;
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={path}
            className={cn(cl.item, { [cl.collapsed]: collapsed })}
        >
            <Icon className={cl.icon} />
            <span className={cl.link}>{t(text) }</span>
        </AppLink>
    );
});
