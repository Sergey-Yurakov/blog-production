import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text text="test" title="title" />,
};
