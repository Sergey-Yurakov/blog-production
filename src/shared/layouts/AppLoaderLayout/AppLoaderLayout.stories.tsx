import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLoaderLayout } from './AppLoaderLayout';

export default {
    title: 'shared/AppLoaderLayout',
    component: AppLoaderLayout,
} as ComponentMeta<typeof AppLoaderLayout>;

const Template: ComponentStory<typeof AppLoaderLayout> = (args) => (
    <AppLoaderLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
