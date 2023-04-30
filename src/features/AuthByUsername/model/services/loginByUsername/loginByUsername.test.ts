import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

// jest.mock('axios');
//
// // через функцию jest.mocked можем замокать не просто сам модуль, но и внутренние поля
// // (чтобы типы работали корректно)
// const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // // перед каждым вызовом метода будет мокаться диспатч и стейт
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('success login', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     // передаем в мок значение, которое потом вернем, промис нужен для асинхронности,
    //     // ибо аксиос возвращает промис
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log('result', result);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     // кол-во диспатч вызовов при вызове метода
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.payload).toEqual(userValue);
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    // });

    // test('error login', async () => {
    //     // передаем в мок значение, которое потом вернем, промис нужен для асинхронности,
    //     // ибо аксиос возвращает промис
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log('result', result);
    //
    //     // кол-во диспатч вызовов при вызове метода
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.payload).toBe('error');
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });

    test('success login', async () => {
        const userValue = { username: '123', id: '1' };
        // передаем в мок значение, которое потом вернем, промис нужен для асинхронности,
        // ибо аксиос возвращает промис

        const thunk = new TestAsyncThunk(loginByUsername);

        // передаем в мок значение, которое нам должен вернуть сервер, в случае успеха
        // в поле data аксиос возвращает какие-либо данные с сервера
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        // в callThunk передаем входные параметры для сервиса (если есть такие)
        const result = await thunk.callThunk({ username: '123', password: '123' });

        console.log('result', result);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // кол-во диспатч вызовов при вызове метода
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toEqual(userValue);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('error login', async () => {
        // передаем в мок значение, которое потом вернем, промис нужен для асинхронности,
        // ибо аксиос возвращает промис

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: '123', password: '123' });

        console.log('result', result);

        // кол-во диспатч вызовов при вызове метода
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toBe('error');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
