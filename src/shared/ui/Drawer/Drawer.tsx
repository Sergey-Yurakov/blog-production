import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cl from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {
    const {
        className,
        onClose,
        isOpen,
        children,
    } = props;

    const { theme } = useTheme();

    const mods: Mods = {
        [cl.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={cn(cl.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cl.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
