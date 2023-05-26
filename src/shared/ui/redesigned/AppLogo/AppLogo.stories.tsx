import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLogo } from './AppLogo';

export default {
    title: 'shared/redesigned/AppLogo',
    component: AppLogo,
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => <AppLogo {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
