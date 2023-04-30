import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return string', () => {
        // DeepPartial<> забирает кусочек от стейта, в данном случае StateSchema
        // передаем какое-то значение в метод, чтобы проверить, что это дже должно вернуться
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'admin' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
