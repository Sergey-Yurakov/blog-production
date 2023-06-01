import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagsOptions {
    userId: string;
    features: Partial<FeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        // внутри build.mutation первый параметр - это то, что должен вернуть сервер,
        // а второй - это входные данные
        updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOptions>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
});

export const updateFeatureFlagsMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate;
