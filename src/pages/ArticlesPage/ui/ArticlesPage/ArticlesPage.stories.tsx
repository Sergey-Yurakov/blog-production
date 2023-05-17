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
Normal.decorators = [
    StoreDecorator({
        articlesPage: {
            isLoading: false,
            hasMore: false,
            ids: [4, 6, 3, 2, 5],
            page: 1,
            limit: 5,
            type: ArticleType.ALL,
            entities: {
                2: {
                    id: '2',
                    title: 'Python news',
                    subtitle: 'Что нового в Python за 2020 год?',
                    img: 'https://office-guru.ru/wp-content/uploads/2021/08/wepk.jpeg',
                    views: 5204,
                    createdAt: '26.02.2020',
                    user: {},
                    type: [ArticleType.ALL],
                    blocks: [],
                },
                3: {
                    id: '2',
                    title: 'Python news',
                    subtitle: 'Что нового в Python за 2020 год?',
                    img: 'https://office-guru.ru/wp-content/uploads/2021/08/wepk.jpeg',
                    views: 5204,
                    createdAt: '26.02.2020',
                    user: {},
                    type: [ArticleType.ALL],
                    blocks: [],
                },
                4: {
                    id: '2',
                    title: 'Python news',
                    subtitle: 'Что нового в Python за 2020 год?',
                    img: 'https://office-guru.ru/wp-content/uploads/2021/08/wepk.jpeg',
                    views: 5204,
                    createdAt: '26.02.2020',
                    user: {},
                    type: [ArticleType.ALL],
                    blocks: [],
                },
                5: {
                    id: '2',
                    title: 'Python news',
                    subtitle: 'Что нового в Python за 2020 год?',
                    img: 'https://office-guru.ru/wp-content/uploads/2021/08/wepk.jpeg',
                    views: 5204,
                    createdAt: '26.02.2020',
                    user: {},
                    type: [ArticleType.ALL],
                    blocks: [],
                },
                6: {
                    id: '2',
                    title: 'Python news',
                    subtitle: 'Что нового в Python за 2020 год?',
                    img: 'https://office-guru.ru/wp-content/uploads/2021/08/wepk.jpeg',
                    views: 5204,
                    createdAt: '26.02.2020',
                    user: {},
                    type: [ArticleType.ALL],
                    blocks: [],
                },
            },
        },
    }),
];
