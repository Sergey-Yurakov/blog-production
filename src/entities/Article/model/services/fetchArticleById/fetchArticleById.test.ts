import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
    test('success', async () => {
        const userId = { id: '1' };
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: userId }));
        const result = await thunk.callThunk('1');

        console.log('result', result);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(userId);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('');

        console.log('result', result);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual('error');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
