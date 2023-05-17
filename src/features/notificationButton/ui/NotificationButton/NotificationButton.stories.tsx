import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Notification } from '@/entities/Notification';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationButton } from './NotificationButton';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    decorators: [
        StoreDecorator({}),
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

const data: Notification = {
    title: 'title',
    description: 'description',
    id: '1',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    ...data,
                    id: '1',
                },
                {
                    ...data,
                    id: '2',
                },
                {
                    ...data,
                    id: '3',
                },
                {
                    ...data,
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
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    ...data,
                    id: '1',
                },
                {
                    ...data,
                    id: '2',
                },
                {
                    ...data,
                    id: '3',
                },
                {
                    ...data,
                    id: '4',
                },
            ],
        },
    ],
};
