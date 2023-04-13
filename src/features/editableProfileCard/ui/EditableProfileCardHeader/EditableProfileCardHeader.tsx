import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Buttton/Button';
import { profileActions } from '../../model/slices/profileSlice';
import {
    updateProfileData,
} from '../../model/services/updateProfileData/updateProfileData';
import {
    getProfileData,
} from '../../model/selectors/getProfileData/getProfileData';
import {
    getProfileReadOnly,
} from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const redOnly = useSelector(getProfileReadOnly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const caeEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack
            className={cn('', {}, [className])}
            justify="between"
            max
        >
            <Text title={t('Профиль')} />
            {caeEdit && (
                <HStack
                    gap="16"
                >
                    {redOnly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                </HStack>
            )}
        </HStack>
    );
});
