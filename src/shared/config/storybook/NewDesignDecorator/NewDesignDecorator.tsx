import { Story } from '@storybook/react';

import { setFeaturesFlag } from '@/shared/lib/features';
import { getAllFeaturesFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (StoryComponent: Story) => {
    setFeaturesFlag({
        ...getAllFeaturesFlags(),
        isAppRedesigned: true,
    });

    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    );
};
