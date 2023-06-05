import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import ArticleRecommendationsList from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

const article: Article = {
    id: '1',
    img: '',
    title: 'title',
    createdAt: '',
    user: {
        id: '1',
        username: 'admin',
    },
    views: 123,
    type: [],
    blocks: [],
    subtitle: 'subtitle',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                {
                    ...article,
                    id: '1',
                },
                {
                    ...article,
                    id: '2',
                },
                {
                    ...article,
                    id: '3',
                },
                {
                    ...article,
                    id: '4',
                },
            ],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                {
                    ...article,
                    id: '1',
                },
                {
                    ...article,
                    id: '2',
                },
                {
                    ...article,
                    id: '3',
                },
                {
                    ...article,
                    id: '4',
                },
            ],
        },
    ],
};
