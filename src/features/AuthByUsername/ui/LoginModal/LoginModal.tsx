import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { memo, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

export const LoginModal = memo(({ className, onClose, isOpen }: LoginModalProps) => (
    <Modal
        className={cn('', {}, [className])}
        isOpen={isOpen}
        onCLose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync
                isOpen={isOpen}
                onSuccess={onClose}
            />
        </Suspense>
    </Modal>
));
