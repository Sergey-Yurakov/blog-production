import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    {
        value: Country.ARMENIA,
        content: Country.ARMENIA,
    },
    {
        value: Country.BELARUS,
        content: Country.BELARUS,
    },
    {
        value: Country.KAZAKHSTAN,
        content: Country.KAZAKHSTAN,
    },
    {
        value: Country.RUSSIA,
        content: Country.RUSSIA,
    },
    {
        value: Country.UKRAINE,
        content: Country.UKRAINE,
    },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readOnly } = props;

    const { t } = useTranslation('profile');

    const onChangeHandle = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const propsComponent = {
        className,
        defaultValue: t('Укажите страну'),
        items: options,
        value,
        readOnly,
        onChange: onChangeHandle,
        direction: 'top right' as const,
        label: t('Укажите страну'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ListBoxDeprecated {...propsComponent} />}
            on={<ListBox {...propsComponent} />}
        />
    );
});
