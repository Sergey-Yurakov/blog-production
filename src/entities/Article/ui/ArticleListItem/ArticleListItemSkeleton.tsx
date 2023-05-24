import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

import { ArticleView } from '../../model/consts/articleConsts';

import cl from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={cn(cl.ArticleListItem, {}, [className, cl[view]])}>
                <Card>
                    <div className={cl.header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton width={150} height={16} className={cl.username} />
                        <Skeleton width={150} height={16} className={cl.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cl.title} />
                    <Skeleton height={200} className={cl.img} />

                    <div className={cl.footer}>
                        <Skeleton width={200} height={36} />
                        <Skeleton width={150} height={16} className={cl.views} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={cn(cl.ArticleListItem, {}, [className, cl[view]])}>
            <Card>
                <div className={cl.imageWrapper}>
                    <Skeleton width={200} height={200} className={cl.img} />
                </div>
                <div className={cl.infoWrapper}>
                    <Skeleton width={130} height={16} />
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} />
            </Card>
        </div>
    );
});
