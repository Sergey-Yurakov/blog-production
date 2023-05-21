import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';

// createAsyncThunk<JsonSettings, JsonSettings - первый параметр - это входные данные,
// а второй - выходные
export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        // получаем значение из лс
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('id пользователя отсутствует');
        }

        try {
            const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
