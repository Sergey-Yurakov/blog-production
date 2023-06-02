import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleEditButton } from './ArticleEditButton';

export default {
    title: 'features/ArticleEditButton',
    component: ArticleEditButton,
} as ComponentMeta<typeof ArticleEditButton>;

const Template: ComponentStory<typeof ArticleEditButton> = (args) => (
    <ArticleEditButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
