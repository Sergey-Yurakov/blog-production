import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cl from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?:boolean;
}

export const Drawer = (props: DrawerProps) => {
    const {
        className,
        onClose,
        isOpen,
        children,
        lazy,
    } = props;

    const { theme } = useTheme();

    const {
        isRenderModal, isClosing, isMounted, close,
    } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const mods: Mods = {
        [cl.opened]: isRenderModal,
        [cl.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={cn(cl.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cl.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
