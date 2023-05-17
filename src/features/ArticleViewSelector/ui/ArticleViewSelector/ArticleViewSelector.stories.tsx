import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/Article/ArticleViewSelector',
    component: ArticleViewSelector,
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    view: ArticleView.SMALL,
};

export const Dark = Template.bind({});
Dark.args = {
    view: ArticleView.SMALL,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
