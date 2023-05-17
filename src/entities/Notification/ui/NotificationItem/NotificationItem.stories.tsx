import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Notification } from '../../model/types/notification';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/Notification/NotificationItem',
    component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

const notification: Notification = {
    id: '1',
    description: 'text',
    title: 'title',
};

export const Normal = Template.bind({});
Normal.args = {
    item: notification,
};

export const Dark = Template.bind({});
Dark.args = {
    item: notification,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
