import { memo } from 'react';

import { RoutePath } from '@/shared/const/router';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cl from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack
                className={cn(cl.CommentCard, {}, [className, cl.loading])}
                gap="8"
                max
            >
                <HStack max>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cl.username}
                    />
                </HStack>
                <Skeleton
                    className={cl.text}
                    width="100%"
                    height={50}
                />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            className={cn(cl.CommentCard, {}, [className])}
            max
        >
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
            >
                <HStack max gap="8">
                    {comment.user.avatar ? (
                        <Avatar
                            size={30}
                            src={comment.user.avatar}
                        />
                    ) : null}
                    <Text
                        title={comment.user.username}
                        className={cl.username}
                    />
                </HStack>
            </AppLink>
            <Text
                text={comment.text}
            />
        </VStack>
    );
});
