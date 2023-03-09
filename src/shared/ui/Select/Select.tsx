import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cl from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    option?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        option,
        value,
        readOnly,
        onChange,
    } = props;

    const optionList = useMemo(() => option?.map((opt) => (
        <option
            value={opt.value}
            key={opt.value}
            className={cl.option}
        >
            {opt.content}
        </option>
    )), [option]);

    const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cl.readOnly]: readOnly,
    };

    return (
        <div className={cn(cl.Wrapper, mods, [className])}>
            {label && (
                <span
                    className={cl.label}
                >
                    {`${label}>`}
                </span>
            )}
            <select
                className={cl.select}
                value={value}
                onChange={onChangeHandle}
                disabled={readOnly}
            >
                {optionList}
            </select>
        </div>
    );
});
