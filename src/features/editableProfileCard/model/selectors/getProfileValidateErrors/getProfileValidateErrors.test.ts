import { StateSchema } from '@/app/providers/StoreProvider';

import { ValidateProfileErrors } from '../../consts/consts';

import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return data', () => {
        const errors = [
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.NO_DATA,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
