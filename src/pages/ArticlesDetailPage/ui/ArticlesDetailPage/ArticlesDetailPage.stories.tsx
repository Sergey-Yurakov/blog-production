import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticlesDetailPage from './ArticlesDetailPage';

export default {
    title: 'shared/ArticlesDetailPage',
    component: ArticlesDetailPage,

} as ComponentMeta<typeof ArticlesDetailPage>;

const Template: ComponentStory<typeof ArticlesDetailPage> = (args) => <ArticlesDetailPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
