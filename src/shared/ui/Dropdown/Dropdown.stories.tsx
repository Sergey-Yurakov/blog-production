import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Buttton/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],

} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { content: 'text 1' },
        { content: 'text 2' },
        { content: 'text 3' },
    ],
    direction: 'top left',
    trigger: <Button>Open!</Button>,
};

export const TopLRight = Template.bind({});
TopLRight.args = {
    items: [
        { content: 'text 1' },
        { content: 'text 2' },
        { content: 'text 3' },
    ],
    direction: 'top right',
    trigger: <Button>Open!</Button>,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { content: 'text 1' },
        { content: 'text 2' },
        { content: 'text 3' },
    ],
    direction: 'bottom left',
    trigger: <Button>Open!</Button>,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { content: 'text 1' },
        { content: 'text 2' },
        { content: 'text 3' },
    ],
    direction: 'bottom right',
    trigger: <Button>Open!</Button>,
};
