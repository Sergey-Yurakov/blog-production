import { ReactNode, useCallback, useEffect, useState } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { toggleFeatures } from '@/shared/lib/features';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cl from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = (props: DrawerProps) => {
    const { className, onClose, isOpen, children, lazy = false } = props;

    const [isMounted, setIsMounted] = useState(false);

    const { theme } = useTheme();
    const { Gesture, Spring } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({
            y: 0,
            immediate: false,
        });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: {
                ...Spring.config.stiff,
                velocity,
            },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({
                    y: my,
                    immediate: true,
                });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    if (lazy && !isMounted) {
        return null;
    }

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={cn(cl.Drawer, {}, [
                    className,
                    theme,
                    'app_drawer',
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        off: () => cl.drawerOld,
                        on: () => cl.drawerNew,
                    }),
                ])}
            >
                <Overlay onClick={close} />
                <Spring.a.div
                    className={cl.sheet}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
};
