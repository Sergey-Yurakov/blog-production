// import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { initArticlesPage } from './initArticlesPage';
// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
//
// jest.mock('../fetchArticlesList/fetchArticlesList');
//
// describe('fetchNextArticlesPage', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//                 _inited: false,
//             },
//         });
//         const result = await thunk.callThunk();
//
//         console.log('result', result);
//
//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
//         expect(result.meta.requestStatus).toBe('fulfilled');
//     });
//
//     test('fetchArticlePage not called', async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 _inited: true,
//             },
//         });
//         const result = await thunk.callThunk();
//
//         console.log('result', result);
//
//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(fetchArticlesList).not.toHaveBeenCalled();
//     });
// });
