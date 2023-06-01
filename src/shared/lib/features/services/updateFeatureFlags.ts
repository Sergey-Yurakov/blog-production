import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';

import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeaturesFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>('users/updateFeatureFlags', async ({ newFeatures, userId }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    const featureFlags = getAllFeaturesFlags();

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...featureFlags,
                    ...newFeatures,
                },
            }),
        );

        window.location.reload();
        return undefined;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
