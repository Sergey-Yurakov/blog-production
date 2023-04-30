import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

import {
    getArticlesPageNumber,
    getArticlesPageIsLoading,
    getArticlesPageHasMore,
    getArticlesPageLimit,
    getArticlesPageError,
    getArticlesPageView,
    getArticlesPageInited,
} from './articlesPageSelectors';

describe('articlesPageSelectors', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return getArticlesPageNumber', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: 2,
            },
        };
        expect(getArticlesPageNumber(state as StateSchema)).toEqual(2);
    });

    test('should work with empty getArticlesPageNumber', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageNumber(state as StateSchema)).toEqual(1);
    });

    test('should return getArticlesPageHasMore', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                hasMore: false,
            },
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(false);
    });

    test('should work with empty getArticlesPageHasMore', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
    });

    test('should return getArticlesPageLimit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 5,
            },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(5);
    });

    test('should work with empty getArticlesPageLimit', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(9);
    });

    test('should return getArticlesPageError', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty getArticlesPageError', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
    });

    test('should return getArticlesPageView', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.BIG,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.BIG);
    });

    test('should work with empty getArticlesPageView', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.SMALL);
    });

    test('should return getArticlesPageInited', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                _inited: true,
            },
        };
        expect(getArticlesPageInited(state as StateSchema)).toEqual(true);
    });

    test('should work with empty getArticlesPageInited', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageInited(state as StateSchema)).toEqual(undefined);
    });
});
