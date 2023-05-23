import { ReactElement } from 'react';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { getFeaturesFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;

    if (getFeaturesFlag(feature)) {
        return on;
    }

    return off;
};
