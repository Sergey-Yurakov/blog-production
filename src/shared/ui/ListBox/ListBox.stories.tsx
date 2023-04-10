import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,

} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { value: '1', content: 'text 1' },
        { value: '2', content: 'text 2' },
        { value: '3', content: 'text 3' },
    ],
    defaultValue: 'button',
};

export const DisableItems = Template.bind({});
DisableItems.args = {
    items: [
        { value: '1', content: 'text 1', disabled: true },
        { value: '2', content: 'text 2' },
        { value: '3', content: 'text 3', disabled: true },
    ],
    defaultValue: 'button',
};
