import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,

} as ComponentMeta<typeof ProfileCard>;

// @ts-ignore
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Sergey',
        lastname: 'Yurakov',
        age: 30,
        currency: Currency.RUB,
        country: Country.RUSSIA,
        city: 'Moscow',
        username: 'admin',
        avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
