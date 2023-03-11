import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
    first: 'Sergey',
    lastname: 'Yurakov',
    age: 30,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
};

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        console.log('result', result);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(data);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        console.log('result', result);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual('error');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
