import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Buttton/Button';
import { useTranslation } from 'react-i18next';
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
            <Button data-testid="sidebar-toggle" onClick={onToggle}>
                {t('Переключить') }
            </Button>
            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cl.lang} />
            </div>
        </div>
    );
};
