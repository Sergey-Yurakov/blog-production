import { Story } from '@storybook/react';

import { setFeaturesFlag } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const FeaturesFlagsDecorator =
    (features: FeatureFlags) => (StoryComponent: Story) => {
        setFeaturesFlag(features);

        return <StoryComponent />;
    };
