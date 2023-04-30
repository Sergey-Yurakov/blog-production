import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,

} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
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

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
