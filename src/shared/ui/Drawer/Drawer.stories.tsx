import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children: (
        <>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                totam.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                totam.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                totam.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                totam.
            </div>
        </>
    ),
};
