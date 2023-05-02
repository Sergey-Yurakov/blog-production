import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileErrors } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

import { profileReducer, profileActions } from './profileSlice';

const data = {
    first: 'Sergey',
    lastname: 'Yurakov',
    age: 30,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
};

describe('profileSlice', () => {
    test('test set in readOnly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadOnly(true),
            ),
        )
            .toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            data,
            form: { username: '' },
            validateErrors: [],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        )
            .toEqual({
                readonly: true,
                data,
                form: data,
                validateErrors: undefined,
            });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: '123456' }),
            ),
        )
            .toEqual({ form: { username: '123456' } });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
            isLoading: false,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
            ),
        )
            .toEqual({ validateErrors: undefined, isLoading: true });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
            isLoading: true,
            readonly: false,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        )
            .toEqual({
                validateErrors: undefined,
                isLoading: false,
                readonly: true,
                data,
                form: data,
            });
    });
});
