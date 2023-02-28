import { classNames as cn } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cl from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onCLose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        onCLose,
        isOpen,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isRenderModal, setIsRenderModal] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerRef.current = setTimeout(() => {
                setIsRenderModal(true);
            }, 0);
        }

        return () => {
            clearInterval(timerRef.current);
            setIsRenderModal(false);
        };
    }, [isOpen]);

    const closeHandle = useCallback(() => {
        if (onCLose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onCLose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onCLose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandle();
        }
    }, [closeHandle]);

    const onContextClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearInterval(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cl.opened]: isRenderModal,
        [cl.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={cn(cl.Modal, mods, [className, theme])}>
                <div className={cl.overlay} onClick={closeHandle}>
                    <div
                        className={cl.content}
                        onClick={onContextClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
