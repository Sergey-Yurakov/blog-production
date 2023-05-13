import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileErrors } from '../../consts/consts';

import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Sergey',
    lastname: 'Yurakov',
    age: 30,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        console.log('result', result);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const errors = [ValidateProfileErrors.INCORRECT_USER_DATA];
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        console.log('result', result);

        expect(result).toEqual(errors);
    });

    test('incorrect age', async () => {
        const errors = [ValidateProfileErrors.INCORRECT_AGE];
        const result = validateProfileData({ ...data, age: undefined });

        console.log('result', result);

        expect(result).toEqual(errors);
    });

    test('incorrect city and username', async () => {
        const errors = [
            ValidateProfileErrors.INCORRECT_CITY,
            ValidateProfileErrors.INCORRECT_USERNAME,
        ];
        const result = validateProfileData({ ...data, city: '', username: '' });

        console.log('result', result);

        expect(result).toEqual(errors);
    });

    test('incorrect all', async () => {
        const errors = [
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_CITY,
            ValidateProfileErrors.INCORRECT_USERNAME,
        ];
        const result = validateProfileData({});

        console.log('result', result);

        expect(result).toEqual(errors);
    });
});
