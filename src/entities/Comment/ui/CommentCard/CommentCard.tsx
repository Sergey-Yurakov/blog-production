import { classNames as cn } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import cl from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
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
            <div className={cn(cl.CommentCard, {}, [className])}>
                <div className={cl.header}>
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
                </div>
                <Skeleton
                    className={cl.text}
                    width="100%"
                    height={50}
                />
            </div>
        );
    }

    return (
        <div className={cn(cl.CommentCard, {}, [className])}>
            <div className={cl.header}>
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
            </div>
            <Text
                text={comment.text}
                className={cl.text}
            />
        </div>
    );
});
