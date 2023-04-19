import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../../Buttton/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    decorators: [
        (Story) => <div style={{ padding: '100px 300px', width: 'fit-content' }}><Story /></div>,
    ],

} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    trigger: <Button>text</Button>,
    items: [
        { content: 'text111111111' },
        { content: 'text222222222' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    trigger: <Button>text</Button>,
    items: [
        { content: 'text111111111' },
        { content: 'text222222222' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    trigger: <Button>text</Button>,
    items: [
        { content: 'text111111111' },
        { content: 'text222222222' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    trigger: <Button>text</Button>,
    items: [
        { content: 'text111111111' },
        { content: 'text222222222' },
    ],
};
