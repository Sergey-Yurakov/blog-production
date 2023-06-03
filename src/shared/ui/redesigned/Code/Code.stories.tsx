import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Code } from './Code';

export default {
    title: 'shared/redesigned/Code',
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text:
        "import React from 'react';\n" +
        "import { ComponentMeta, ComponentStory } from '@storybook/react';\n" +
        '\n' +
        "import { Code } from './Code';\n" +
        '\n' +
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
