import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId', () => {
    test('success', async () => {
        const article = {
            articleId: '1',
        };

        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));
        const result = await thunk.callThunk('1');

        console.log('result', result);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(article);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('2');

        console.log('result', result);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual('error');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
