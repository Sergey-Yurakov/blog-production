import { memo, useMemo, useState } from 'react';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Buttton';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { useSidebarItems } from '../../selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cl from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

// todo: сделать потом декомопзицию нормально!!!
// const DeprecatedSidebar = () => {}
// const SidebarRedesigned = () => {};

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSidebarItems();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={cn(
                        cl.SidebarRedesigned,
                        { [cl.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        size={collapsed ? 30 : 50}
                        className={cl.appLogo}
                    />
                    <VStack className={cl.items} gap="8" role="navigation">
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cl.collapseBtn}
                        Svg={ArrowIcon}
                        clickable
                    />
                    <div className={cl.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cl.lang} />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={cn(cl.Sidebar, { [cl.collapsed]: collapsed }, [
                        className,
                    ])}
                >
                    <Button
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cl.collapseBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        size={ButtonSize.L}
                        square
                    >
                        {collapsed ? '>' : '<'}
                    </Button>

                    <VStack className={cl.items} gap="8" role="navigation">
                        {itemsList}
                    </VStack>

                    <div className={cl.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cl.lang} />
                    </div>
                </aside>
            }
        />
    );
});
