import { ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';

describe('articlesPageSlice', () => {
    test('test set in setPage', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
            view: ArticleView.SMALL,
            page: 1,
            hasMore: true,
            _inited: false,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setPage(2),
            ),
        )
            .toEqual({
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                page: 2,
                hasMore: true,
            });
    });

    test('test set in setView', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
            view: ArticleView.SMALL,
            page: 1,
            hasMore: true,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setView(ArticleView.BIG),
            ),
        )
            .toEqual({
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.BIG,
                page: 1,
                hasMore: true,
            });
    });

    test('test update fetchArticlesList service pending', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            error: 'error',
            isLoading: false,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                fetchArticlesList.pending,
            ),
        )
            .toEqual({
                error: undefined,
                isLoading: true,
            });
    });
});
