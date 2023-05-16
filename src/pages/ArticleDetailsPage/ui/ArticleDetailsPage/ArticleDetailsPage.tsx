import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Counter } from '@/entities/Counter';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getFeaturesFlag } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import cl from './ArticleDetailsPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = ({ className }: ArticlesDetailPageProps) => {
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeaturesFlag('isArticleRatingEnabled');
    const isCounterEnabled = getFeaturesFlag('isCounterEnabled');

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={cn(cl.ArticlesDetailPage, {}, [className])}>
                <VStack max gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id!} />
                    {isCounterEnabled && <Counter />}
                    {isArticleRatingEnabled && (
                        <ArticleRating articleId={id!} />
                    )}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id!} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
