import React, { InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

import { genericTypedMemo } from '@/shared/const/genericTypedMemo';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps<T> extends HTMLInputProps {
    className?: string;
    value?: T | number;
    onChange?: (value: T) => void;
    autofocus?: boolean;
    isOpen?: boolean;
    readOnly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Input = genericTypedMemo(<T extends string>(props: InputProps<T>) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        isOpen = false,
        readOnly,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref?.current?.focus();
        }
        if (isOpen) {
            ref?.current?.focus();
        }

        return () => {
            setIsFocused(false);
        };
    }, [autofocus, isOpen]);

    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value as T);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };

    const mods: Mods = {
        [cl.readOnly]: readOnly,
        [cl.focused]: isFocused,
        [cl.withAddonLeft]: Boolean(addonLeft),
        [cl.withAddonRight]: Boolean(addonRight),
    };

    return (
        <div className={cn(cl.InputWrapper, mods, [className])}>
            {addonLeft && <div className={cl.addonLeft}>{addonLeft}</div>}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={changeHandle}
                className={cl.input}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readOnly}
                placeholder={placeholder}
                {...otherProps}
            />
            {addonRight && <div className={cl.addonRight}>{addonRight}</div>}
        </div>
    );
});
