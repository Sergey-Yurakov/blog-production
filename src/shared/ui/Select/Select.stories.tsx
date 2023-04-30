import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    option: [
        { value: '12', content: 'One opt' },
        { value: '123', content: 'Second opt' },
        { value: '1234', content: 'Third opt' },
    ],
};
