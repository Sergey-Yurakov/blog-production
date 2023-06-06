import { memo, useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Buttton';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Buttton';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';

import cl from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, isOpen = false, onSuccess } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const forceUpdate = useForceUpdate();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
            }),
        );

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            forceUpdate();
        }
    }, [dispatch, forceUpdate, onSuccess, password, username]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                onLoginClick().then((r) => r);
            }
        },
        [onLoginClick],
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', onKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <div className={cn(cl.LoginForm, {}, [className])}>
                        <div>
                            <TextDeprecated title={t('Форма авторизации')} />
                            <div>
                                {error && (
                                    <TextDeprecated
                                        theme={TextTheme.ERROR}
                                        text={t(
                                            'Вы ввели неверный логин или пароль',
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                        <InputDeprecated
                            isOpen={isOpen}
                            autoFocus
                            type="text"
                            className={cl.input}
                            placeholder={t('Введите имя пользователя')}
                            onChange={onChangeUserName}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={cl.input}
                            placeholder={t('Введите пароль')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={cl.loginBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
                on={
                    <VStack
                        max
                        gap="8"
                        className={cn(cl.LoginForm, {}, [className])}
                    >
                        <Text title={t('Форма авторизации')} />
                        {error && (
                            <Text
                                variant="error"
                                text={t('Вы ввели неверный логин или пароль')}
                            />
                        )}
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
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
