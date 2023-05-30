import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    {
        value: Currency.EUR,
        content: Currency.EUR,
    },
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readOnly } = props;

    const { t } = useTranslation('profile');

    const onChangeHandle = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const propsComponent = {
        className,
        defaultValue: t('Укажите валюту'),
        items: options,
        value,
        readOnly,
        onChange: onChangeHandle,
        direction: 'top right' as const,
        label: t('Укажите валюту'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ListBoxDeprecated {...propsComponent} />}
            on={<ListBox {...propsComponent} />}
        />
    );
});
