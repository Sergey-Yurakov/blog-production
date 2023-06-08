import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const normalArgs = {
    comment: {
        id: '1',
        text: 'text 1',
        user: {
            id: '1',
            username: 'username',
            avatar: 'avatar',
        },
    },
};

// todo: описать потом все декораторы в README
export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

export const IsLoadingRedesigned = Template.bind({});
IsLoadingRedesigned.args = {
    isLoading: true,
};
IsLoadingRedesigned.decorators = [NewDesignDecorator];
