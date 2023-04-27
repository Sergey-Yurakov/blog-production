import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/Notification/NotificationList',
    component: NotificationList,
    decorators: [withMock, StoreDecorator({})],

} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const notifications: Notification = {
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
                    ...notifications,
                    id: '1',
                },
                {
                    ...notifications,
                    id: '2',
                },
                {
                    ...notifications,
                    id: '3',
                },
                {
                    ...notifications,
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
                    ...notifications,
                    id: '1',
                },
                {
                    ...notifications,
                    id: '2',
                },
                {
                    ...notifications,
                    id: '3',
                },
                {
                    ...notifications,
                    id: '4',
                },
            ],
        },
    ],
};
