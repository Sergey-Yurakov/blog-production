import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Buttton/Button';
import { Input } from 'shared/ui/Input/Input';
import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;

}

export const LoginForm = ({ className, isOpen }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={cn(cl.LoginForm, {}, [className])}>
            <Input
                isOpen={isOpen}
                autoFocus
                type="text"
                className={cl.input}
                placeholder={t('Введите имя пользователя')}
            />
            <Input
                type="text"
                className={cl.input}
                placeholder={t('Введите пароль')}
            />
            <Button
                className={cl.loginBtn}
            >
                {t('Войти') }
            </Button>
        </div>
    );
};
