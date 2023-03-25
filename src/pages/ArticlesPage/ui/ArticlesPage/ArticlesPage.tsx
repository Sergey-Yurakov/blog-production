import { classNames as cn } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSlelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slice/articlesPageSlice';
import cl from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cn(cl.ArticlesPage, {}, [className])}>
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
