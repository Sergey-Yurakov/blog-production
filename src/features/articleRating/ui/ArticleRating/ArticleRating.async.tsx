import { lazy, Suspense } from 'react';

import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesign } from '@/shared/ui/redesigned/Skeleton';

import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => SkeletonDeprecated,
        on: () => SkeletonRedesign,
    });

    return (
        <Suspense fallback={<Skeleton width="100%" height={120} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
