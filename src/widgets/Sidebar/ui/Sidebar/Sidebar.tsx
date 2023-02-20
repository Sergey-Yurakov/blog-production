import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Buttton/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cl from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                cn(
                    cl.Sidebar,
                    { [cl.collapsed]: collapsed },
                    [className],
                )
            }
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

            <div className={cl.items}>
                <div>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                        className={cl.item}
                    >
                        <MainIcon className={cl.icon} />
                        <span className={cl.link}>{t('Главная') }</span>
                    </AppLink>
                </div>

                <div>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                        className={cl.item}
                    >
                        <AboutIcon className={cl.icon} />
                        <span className={cl.link}>{t('О нас') }</span>
                    </AppLink>
                </div>
            </div>

            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cl.lang} />
            </div>
        </div>
    );
};
