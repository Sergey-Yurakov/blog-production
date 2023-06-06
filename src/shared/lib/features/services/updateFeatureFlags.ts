import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';

import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeaturesFlags, setFeaturesFlag } from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>('features/updateFeatureFlags', async ({ newFeatures, userId }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    const featureFlags = getAllFeaturesFlags();

    const allFeatures = {
        ...featureFlags,
        ...newFeatures,
    };
    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: allFeatures,
            }),
        );

        setFeaturesFlag(allFeatures);
        window.location.reload();

        return undefined;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
