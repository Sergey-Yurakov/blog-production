import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Buttton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Buttton';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slices/profileSlice';

interface EditableProfileCardHeaderProps {
    className?: string;
    isLoading?: boolean;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className, isLoading } = props;
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

        if (isLoading) {
            return (
                <Card maxWidth padding="16">
                    <HStack justify="between">
                        <Skeleton width={103} height={32} />
                        <Skeleton width={149} height={44} />
                    </HStack>
                </Card>
            );
        }

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <HStack
                        className={cn('', {}, [className])}
                        justify="between"
                        max
                    >
                        <TextDeprecated title={t('Профиль')} />
                        {caeEdit && (
                            <HStack gap="16">
                                {redOnly ? (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Редактировать')}
                                    </ButtonDeprecated>
                                ) : (
                                    <>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Отменить')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Сохранить')}
                                        </ButtonDeprecated>
                                    </>
                                )}
                            </HStack>
                        )}
                    </HStack>
                }
                on={
                    <Card maxWidth padding="24" border="partial">
                        <HStack
                            className={cn('', {}, [className])}
                            justify="between"
                            max
                        >
                            <Text title={t('Профиль')} />
                            {caeEdit && (
                                <HStack gap="16">
                                    {redOnly ? (
                                        <Button
                                            onClick={onEdit}
                                            data-testid="EditableProfileCardHeader.EditButton"
                                        >
                                            {t('Редактировать')}
                                        </Button>
                                    ) : (
                                        <>
                                            <Button
                                                color="error"
                                                onClick={onCancelEdit}
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                            >
                                                {t('Отменить')}
                                            </Button>
                                            <Button
                                                color="success"
                                                onClick={onSave}
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                            >
                                                {t('Сохранить')}
                                            </Button>
                                        </>
                                    )}
                                </HStack>
                            )}
                        </HStack>
                    </Card>
                }
            />
        );
    },
);
