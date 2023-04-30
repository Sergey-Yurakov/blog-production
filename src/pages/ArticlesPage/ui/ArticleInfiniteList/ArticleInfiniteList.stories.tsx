import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleInfiniteList } from './ArticleInfiniteList';
import { ArticlesPageSchema } from '../../model/types/articlesPageSchema';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,

} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

const article: ArticlesPageSchema = {
    isLoading: false,
    error: '',
    page: 1,
    limit: 3,
    hasMore: true,
    _inited: true,
    view: ArticleView.BIG,
    order: 'asc',
    sort: ArticleSortField.CREATED,
    search: '',
    type: ArticleType.ALL,
    entities: {},
    ids: [],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articlesPage: article,
})];
