import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Buttton/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cl from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={cn(cl.ProfileCard, {}, [className])}>
            <div className={cl.header}>
                <Text title={t('Профиль')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cl.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cl.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cl.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cl.input}
                />
            </div>
        </div>
    );
};
