import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

describe('articleDetailsCommentsSlice', () => {
    test('test update article details service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            ids: [],
            entities: {},
            isLoading: false,
        };
        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.pending,
            ),
        )
            .toEqual({
                ids: [],
                entities: {},
                isLoading: true,
            });
    });
});
