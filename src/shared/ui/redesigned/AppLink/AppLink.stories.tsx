import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppLink } from './AppLink';

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,

    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Text',
};

export const Red = Template.bind({});
Red.args = {
    variant: 'red',
    children: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    variant: 'primary',
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    variant: 'red',
    children: 'Text',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
