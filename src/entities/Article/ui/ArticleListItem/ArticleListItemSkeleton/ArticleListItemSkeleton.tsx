import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { ArticleView } from '../../../model/consts/articleConsts';
import cl from '../ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

// todo: избавиться потом от стилей в скелетоне, переписать через HStack/VStack
export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => cl.ArticleListItem,
        on: () => cl.ArticleListItemRedesigned,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => SkeletonDeprecated,
        on: () => SkeletonRedesigned,
    });

    const Card = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => CardDeprecated,
        on: () => CardRedesigned,
    });

    if (view === ArticleView.BIG) {
        return (
            <div className={cn(mainClass, {}, [className, cl[view]])}>
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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div className={cn(mainClass, {}, [className, cl[view]])}>
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
            }
            on={
                <div className={cn(mainClass, {}, [className, cl[view]])}>
                    <VStack gap="8" max>
                        <Skeleton width={240} height={141} border="32px 32px 0 0" />
                        <Skeleton width={240} height={113} />
                        <Skeleton width={240} height={22} />
                        <Skeleton width={240} height={32} border="0 0 32px 32px" />
                    </VStack>
                </div>
            }
        />
    );
});
