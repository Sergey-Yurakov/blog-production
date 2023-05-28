import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StickyContentLayout } from './StickyContentLayout';

export default {
    title: 'shared/StickyContentLayout',
    component: StickyContentLayout,
} as ComponentMeta<typeof StickyContentLayout>;

const Template: ComponentStory<typeof StickyContentLayout> = (args) => (
    <StickyContentLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
