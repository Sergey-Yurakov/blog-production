import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import {
    ProfileCardProps,
    validateAge,
} from '../ProfileCardProps/ProfileCardProps';

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card maxWidth padding="24" border="partial">
            <VStack gap="32">
                <HStack max justify="center">
                    <Skeleton border="100%" width={128} height={128} />
                </HStack>
                <HStack max gap="32">
                    <VStack gap="16" max>
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                    <VStack gap="16" max>
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack justify="center" max>
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </HStack>
    );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

    return (
        <Card className={className} padding="24" maxWidth border="partial">
            <VStack gap="32">
                {data?.avatar && (
                    <HStack max justify="center">
                        <Avatar
                            size={128}
                            src={data?.avatar}
                            alt="avatar icon"
                        />
                    </HStack>
                )}
                <HStack max gap="24">
                    <VStack max gap="16">
                        <Input
                            value={data?.first}
                            label={t('Имя')}
                            onChange={onChangeFirstname}
                            readOnly={readOnly}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            onChange={onChangeLastname}
                            readOnly={readOnly}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            onChange={onChangeAge}
                            onKeyDown={validateAge}
                            readOnly={readOnly}
                        />
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            onChange={onChangeCity}
                            readOnly={readOnly}
                        />
                    </VStack>
                    <VStack max gap="16">
                        <Input
                            value={data?.username}
                            label={t('Имя пользователя')}
                            onChange={onChangeUsername}
                            readOnly={readOnly}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Ссылка на аватар')}
                            onChange={onChangeAvatar}
                            readOnly={readOnly}
                        />
                        <CurrencySelect
                            value={data?.currency}
                            readOnly={readOnly}
                            onChange={onChangeCurrency}
                        />
                        <CountrySelect
                            value={data?.country}
                            readOnly={readOnly}
                            onChange={onChangeCountry}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});
