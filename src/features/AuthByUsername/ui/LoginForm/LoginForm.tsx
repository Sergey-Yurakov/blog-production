import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Buttton/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;

}

export const LoginForm = memo(({ className, isOpen }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    useEffect(() => {
        if (!isOpen) {
            dispatch(loginActions.clearError());
        }
    }, [dispatch, isOpen]);

    return (
        <div className={cn(cl.LoginForm, {}, [className])}>
            <div>
                <Text title={t('Форма авторизации')} />
                <div>
                    { error && (
                        <Text theme={TextTheme.ERROR} text={t('Вы ввели неверный логин или пароль')} />
                    )}
                </div>

            </div>
            <Input
                isOpen={isOpen}
                autoFocus
                type="text"
                className={cl.input}
                placeholder={t('Введите имя пользователя')}
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                type="text"
                className={cl.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cl.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти') }
            </Button>
        </div>
    );
});
