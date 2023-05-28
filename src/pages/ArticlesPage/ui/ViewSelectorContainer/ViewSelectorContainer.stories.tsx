import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ViewSelectorContainer } from './ViewSelectorContainer';

export default {
    title: 'pages/ViewSelectorContainer',
    component: ViewSelectorContainer,
} as ComponentMeta<typeof ViewSelectorContainer>;

const Template: ComponentStory<typeof ViewSelectorContainer> = (args) => (
    <ViewSelectorContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
