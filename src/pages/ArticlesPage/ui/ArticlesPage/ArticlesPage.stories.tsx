import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/Article/ArticlesPage',
    component: ArticlesPage,

} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articlesPage: {
        isLoading: false,
        hasMore: false,
        ids: [],
        page: 1,
        limit: 5,
        type: ArticleType.ALL,
        entities: {},
    },
})];
