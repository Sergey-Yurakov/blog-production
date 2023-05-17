import { KeyboardEvent, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

import { Profile } from '../../model/types/profile';

import cl from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const validateAge = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (/\D/.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }, []);

    if (isLoading) {
        return (
            <HStack className={cn(cl.ProfileCard, {}, [className, cl.loading])} justify="center" max>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack className={cn(cl.ProfileCard, {}, [className, cl.error])} justify="center" max>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cl.editing]: !readOnly,
    };

    return (
        <VStack className={cn(cl.ProfileCard, mods, [className])} max gap="16">
            {data?.avatar && (
                <HStack className={cl.avatarWrapper} max justify="center">
                    <Avatar src={data?.avatar} alt="avatar icon" />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstname}
                readOnly={readOnly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastname}
                readOnly={readOnly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                onChange={onChangeAge}
                onKeyDown={validateAge}
                readOnly={readOnly}
            />
            <Input value={data?.city} placeholder={t('Город')} onChange={onChangeCity} readOnly={readOnly} />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                onChange={onChangeUsername}
                readOnly={readOnly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                onChange={onChangeAvatar}
                readOnly={readOnly}
            />
            <CurrencySelect value={data?.currency} readOnly={readOnly} onChange={onChangeCurrency} />
            <CountrySelect value={data?.country} readOnly={readOnly} onChange={onChangeCountry} />
        </VStack>
    );
};
