import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { User } from '@/entities/User';
import { ArticleEditButton } from '@/features/articleEditButton';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const { className, author, views, createdAt } = props;

    const { t } = useTranslation('article-details');

    // todo: добавить в Avatar пропс текст username, чтобы каждый раз не оборачивать это в HStack
    return (
        <VStack gap="32" className={cn('', {}, [className])}>
            <HStack gap="8">
                <Avatar src={author.avatar} size={32} />
                <Text text={author.username} bold />
                <Text text={createdAt} />
            </HStack>
            <ArticleEditButton />
            <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
});
