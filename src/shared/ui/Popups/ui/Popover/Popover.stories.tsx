import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '../../../Buttton/Button';

export default {
    title: 'shared/Popover',
    component: Popover,
    decorators: [
        (Story) => <div style={{ padding: '100px', width: 'fit-content' }}><Story /></div>,
    ],

} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    children: (
        <>
            <div>text 1</div>
            <div>text 2</div>
            <div>text 3</div>
        </>
    ),
    direction: 'top left',
    trigger: <Button>Open!</Button>,
};

export const TopLRight = Template.bind({});
TopLRight.args = {
    children: (
        <>
            <div>text 1</div>
            <div>text 2</div>
            <div>text 3</div>
        </>
    ),
    direction: 'top right',
    trigger: <Button>Open!</Button>,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    children: (
        <>
            <div>text 1</div>
            <div>text 2</div>
            <div>text 3</div>
        </>
    ),
    direction: 'bottom left',
    trigger: <Button>Open!</Button>,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    children: (
        <>
            <div>text 1</div>
            <div>text 2</div>
            <div>text 3</div>
        </>
    ),
    direction: 'bottom right',
    trigger: <Button>Open!</Button>,
};
