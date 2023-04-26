import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [withMock, StoreDecorator({})],

} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

const rating = {
    id: '1',
    rate: 4,
    feedback: 'Хорошая статья',
    userId: '1',
    articleId: '1',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings`,
            method: 'GET',
            status: 200,
            response: [
                rating,
            ],
        },
    ],
};
