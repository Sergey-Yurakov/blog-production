import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <VStack max gap="16">
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack className={cn('', {}, [className])} gap="16" max>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
                    on={<Text text={t('Комментарии отсутствуют')} />}
                />
            )}
        </VStack>
    );
});
