import { KeyboardEvent } from 'react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { Profile } from '../..';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const validateAge = (event: KeyboardEvent<HTMLInputElement>) => {
    if (/\D/.test(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
};
