import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

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

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: '1asfasfasf23', value: '123' },
        { content: '1asfasfasf21233', value: '1232' },
    ],
};
