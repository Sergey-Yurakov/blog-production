import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,

} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
