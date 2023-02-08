import { classNames as cn } from 'shared/lib/classNames/classNames';
import cl from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={cn(cl.sidebar, { [cl.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cl.switchers} >
                <ThemeSwitcher />
                {/* LangSwitcher */}
            </div>
        </div>
    );
}
