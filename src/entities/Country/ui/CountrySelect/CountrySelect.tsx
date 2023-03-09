import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.UKRAINE, content: Country.UKRAINE },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandle = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={cn('', {}, [className])}
            label={t('Укажите страну')}
            option={options}
            value={value}
            readOnly={readOnly}
            onChange={onChangeHandle}
        />
    );
});
