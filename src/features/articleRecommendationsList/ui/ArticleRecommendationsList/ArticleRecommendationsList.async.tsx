import { lazy, Suspense } from 'react';

import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesign } from '@/shared/ui/redesigned/Skeleton';

import { ArticleRecommendationsListProps } from './ArticleRecommendationsList';

const ArticleRecommendationsListLazy = lazy(
    () => import('./ArticleRecommendationsList'),
);

export const ArticleRecommendationsListAsync = (
    props: ArticleRecommendationsListProps,
) => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => SkeletonDeprecated,
        on: () => SkeletonRedesign,
    });

    return (
        <Suspense fallback={<Skeleton width="100%" height={250} />}>
            <ArticleRecommendationsListLazy {...props} />
        </Suspense>
    );
};
