import { ChangeEvent, useMemo } from 'react';

import { genericTypedMemo } from '@/shared/const/genericTypedMemo';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    option?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readOnly?: boolean;
}

export const Select = genericTypedMemo(
    <T extends string>(props: SelectProps<T>) => {
        const { className, label, option, value, readOnly, onChange } = props;

        const optionList = useMemo(
            () =>
                option?.map((opt) => (
                    <option
                        value={opt.value}
                        key={opt.value}
                        className={cl.option}
                    >
                        {opt.content}
                    </option>
                )),
            [option],
        );

        const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value as T);
        };

        const mods: Mods = {
            [cl.readOnly]: readOnly,
        };

        return (
            <div className={cn(cl.Wrapper, mods, [className])}>
                {label && <span className={cl.label}>{`${label}>`}</span>}
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
    },
);
