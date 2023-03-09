import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { KeyboardEvent, useCallback } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import cl from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

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

    const validateAge = useCallback((event: KeyboardEvent) => {
        if (/\D/.test(event.key)) {
            event.preventDefault();
        }
    }, []);

    if (isLoading) {
        return (
            <div className={cn(cl.ProfileCard, {}, [className, cl.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cn(cl.ProfileCard, {}, [className, cl.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cl.editing]: !readOnly,
    };

    return (
        <div className={cn(cl.ProfileCard, mods, [className])}>
            <div className={cl.data}>
                {data?.avatar && (
                    <div className={cl.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                            alt="avatar icon"
                        />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cl.input}
                    onChange={onChangeFirstname}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cl.input}
                    onChange={onChangeLastname}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cl.input}
                    onChange={onChangeAge}
                    onKeyDown={validateAge}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cl.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cl.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cl.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
                <CurrencySelect
                    value={data?.currency}
                    readOnly={readOnly}
                    className={cl.input}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    value={data?.country}
                    readOnly={readOnly}
                    className={cl.input}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
};
