import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return data', () => {
        const data = {
            first: 'Sergey',
            lastname: 'Yurakov',
            age: 30,
            currency: Currency.RUB,
            country: Country.RUSSIA,
            city: 'Moscow',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
