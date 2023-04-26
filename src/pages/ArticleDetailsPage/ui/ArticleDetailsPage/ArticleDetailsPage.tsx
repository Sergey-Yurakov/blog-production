import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import cl from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';

interface ArticlesDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = ({ className }: ArticlesDetailPageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={cn(cl.ArticlesDetailPage, {}, [className])}>
                <VStack max gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails
                        id={id}
                    />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
