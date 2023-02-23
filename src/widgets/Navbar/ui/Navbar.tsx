import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Buttton/Button';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={cn(cl.Navbar, {}, [className])}>

            <Button
                className={cl.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onCLose={onToggleModal}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, provident.
                </div>

            </Modal>
        </div>
    );
};
