import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Page } from './Page';

export default {
    title: 'widgets/Page',
    component: Page,

} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
