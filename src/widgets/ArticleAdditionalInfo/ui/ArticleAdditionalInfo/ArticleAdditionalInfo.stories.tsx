import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <ArticleAdditionalInfo {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
