import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cl from './ArticlesPage.module.scss';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
} from '../../model/selectors/articlesPageSelectors';
import {
    fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const hasMore = useSelector(getArticlesPageHasMore);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        if (hasMore) {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch, hasMore]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <Page>
                <Text
                    title={t('Произошла ошибка при получении статей')}
                    align={TextAlign.CENTER}
                />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <Page
                className={cn(cl.ArticlesPage, {}, [className])}
                onScrollEnd={!isLoading ? onLoadNextPart : undefined}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cl.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
