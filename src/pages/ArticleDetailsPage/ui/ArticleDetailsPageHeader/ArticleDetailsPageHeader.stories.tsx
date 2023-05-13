import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Article, ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

const article: Article = {
    id: '1',
    title: '',
    subtitle: '',
    img: '',
    views: 0,
    createdAt: '',
    user: {
        id: '1',
        username: '',
        avatar: '',
    },
    type: [ArticleType.IT],
    blocks: [],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
        articleDetails: {
            data: article,
        },
    }),
];
