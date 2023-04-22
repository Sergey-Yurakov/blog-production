import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
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
        <ListBox
            className={cn('', {}, [className])}
            defaultValue={t('Укажите страну')}
            items={options}
            value={value}
            readOnly={readOnly}
            onChange={onChangeHandle}
            direction="top right"
            label={t('Укажите страну')}
        />
    );
});
