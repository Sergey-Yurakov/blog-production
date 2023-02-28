import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
    <Modal
        className={cn('', {}, [className])}
        isOpen={isOpen}
        onCLose={onClose}
        lazy
    >
        <LoginForm isOpen={isOpen} />
    </Modal>
);
