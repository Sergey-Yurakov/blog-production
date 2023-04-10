import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],

} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const DisableItems = Template.bind({});
DisableItems.args = {
    items: [
        { value: '1', content: 'text 1', disabled: true },
        { value: '2', content: 'text 2' },
        { value: '3', content: 'text 3', disabled: true },
    ],
    defaultValue: 'button',
    label: 'label',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { value: '1', content: 'text 1' },
        { value: '2', content: 'text 2' },
        { value: '3', content: 'text 3' },
    ],
    value: 'button',
    direction: 'top left',
};

export const TopLRight = Template.bind({});
TopLRight.args = {
    items: [
        { value: '1', content: 'text 1' },
        { value: '2', content: 'text 2' },
        { value: '3', content: 'text 3' },
    ],
    value: 'button',
    direction: 'top right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { value: '1', content: 'text 1' },
        { value: '2', content: 'text 2' },
        { value: '3', content: 'text 3' },
    ],
    value: 'button',
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { value: '1', content: 'text 1' },
        { value: '2', content: 'text 2' },
        { value: '3', content: 'text 3' },
    ],
    value: 'button',
    direction: 'bottom right',
};
