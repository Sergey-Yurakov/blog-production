import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'Как вам статья?',
    feedbackTitle: 'Оставьте отзыв о статье',
    hasFeedback: true,
};
