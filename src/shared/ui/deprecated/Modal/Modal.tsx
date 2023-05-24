import React, { ReactNode } from 'react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cl from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Modal = (props: ModalProps) => {
    const { className, children, onClose, isOpen, lazy } = props;

    const { theme } = useTheme();

    const { isRenderModal, isClosing, isMounted, close } = useModal({
        isOpen,
        lazy,
        onClose,
        animationDelay: ANIMATION_DELAY,
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
            <div className={cn(cl.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div className={cl.content}>{children}</div>
            </div>
        </Portal>
    );
};
