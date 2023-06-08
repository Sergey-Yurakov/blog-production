import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

// @ts-ignore
const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const primaryArgs = {
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

export const Primary = Template.bind({});
Primary.args = primaryArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = primaryArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const PrimaryRedesignedDark = Template.bind({});
PrimaryRedesignedDark.args = primaryArgs;
PrimaryRedesignedDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
    isLoading: true,
};
LoadingRedesigned.decorators = [
    FeaturesFlagsDecorator({ isAppRedesigned: true }),
];
