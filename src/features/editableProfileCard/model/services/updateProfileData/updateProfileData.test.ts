import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

const data = {
    first: 'Sergey',
    lastname: 'Yurakov',
    age: 30,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
};

describe('updateProfileData', () => {
    test('success', async () => {
        // задаем изначальный стейт руками сами,
        // ибо как входные параметры сервис ничего не принимает
        // внутри сервиса получаем данные напрямую из стейта - const formData = getProfileForm(getState());
        // и по этому надо задать начальный стейт руками
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        console.log('result', result);

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.payload).toEqual(data);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('error', async () => {
        const error = [
            ValidateProfileErrors.SERVER_ERROR,
        ];
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        console.log('result', result);

        expect(result.payload).toEqual(error);
        expect(result.meta.requestStatus).toBe('rejected');
    });

    test('validate error', async () => {
        const error = [
            ValidateProfileErrors.INCORRECT_USER_DATA,
        ];
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });
        const result = await thunk.callThunk();

        console.log('result', result);

        expect(result.payload).toEqual(error);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
