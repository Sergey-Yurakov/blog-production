import { memo } from 'react';

import { getRouteProfile } from '@/shared/const/router';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { Comment } from '../../model/types/comment';

import cl from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => SkeletonDeprecated,
        on: () => SkeletonRedesigned,
    });

    if (isLoading) {
        return (
            <VStack
                className={cn(cl.CommentCard, {}, [className, cl.loading])}
                gap="8"
                max
                data-testid="CommentCard.Loading"
            >
                <HStack max>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cl.username} />
                </HStack>
                <Skeleton className={cl.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <VStack
                    className={cn(cl.CommentCard, {}, [className])}
                    max
                    data-testid="CommentCard.Content"
                >
                    <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
                        <HStack max gap="8">
                            {comment.user.avatar ? (
                                <AvatarDeprecated
                                    size={30}
                                    src={comment.user.avatar}
                                />
                            ) : null}
                            <TextDeprecated
                                title={comment.user.username}
                                className={cl.username}
                            />
                        </HStack>
                    </AppLinkDeprecated>
                    <TextDeprecated text={comment.text} />
                </VStack>
            }
            on={
                <Card maxWidth padding="24" border="round">
                    <VStack
                        className={cn(cl.CommentCardRedesigned, {}, [
                            className,
                        ])}
                        max
                        data-testid="CommentCard.Content"
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack max gap="8">
                                {comment.user.avatar ? (
                                    <Avatar
                                        size={30}
                                        src={comment.user.avatar}
                                    />
                                ) : null}
                                <Text text={comment.user.username} bold />
                            </HStack>
                        </AppLink>
                        <Text text={comment.text} />
                    </VStack>
                </Card>
            }
        />
    );
});
