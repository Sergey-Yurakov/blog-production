import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,

} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'text 1',
            user: {
                id: '1',
                username: 'username',
                avatar: 'avatar',
            },
        },
        {
            id: '2',
            text: 'text 2',
            user: {
                id: '2',
                username: 'username 2',
                avatar: 'avatar 2',
            },
        },
    ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
    comments: [],
};
