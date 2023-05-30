import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { ProfileCardProps, validateAge } from '../ProfileCardProps/ProfileCardProps';

import cl from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack className={cn(cl.ProfileCard, {}, [cl.loading])} justify="center" max>
            <Loader />
        </HStack>
    );
};

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack className={cn(cl.ProfileCard, {}, [cl.error])} justify="center" max>
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
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

    const mods: Mods = {
        [cl.editing]: !readOnly,
    };

    return (
        <VStack className={cn(cl.ProfileCardDeprecated, mods, [className])} max gap="16">
            {data?.avatar && (
                <HStack className={cl.avatarWrapper} max justify="center">
                    <AvatarDeprecated src={data?.avatar} alt="avatar icon" />
                </HStack>
            )}
            <InputDeprecated
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstname}
                readOnly={readOnly}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastname}
                readOnly={readOnly}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Ваш возраст')}
                onChange={onChangeAge}
                onKeyDown={validateAge}
                readOnly={readOnly}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('Город')}
                onChange={onChangeCity}
                readOnly={readOnly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                onChange={onChangeUsername}
                readOnly={readOnly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                onChange={onChangeAvatar}
                readOnly={readOnly}
            />
            <CurrencySelect
                value={data?.currency}
                readOnly={readOnly}
                onChange={onChangeCurrency}
            />
            <CountrySelect value={data?.country} readOnly={readOnly} onChange={onChangeCountry} />
        </VStack>
    );
});
