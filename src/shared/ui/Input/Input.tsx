import React, {
    InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps<T> extends HTMLInputProps {
    className?: string;
    value?: T | number;
    onChange?: (value: T) => void;
    autofocus?: boolean;
    isOpen?: boolean;
    readOnly?: boolean;
}

export const Input = <T extends string>(props: InputProps<T>) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        isOpen = false,
        readOnly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const isCaretVisible = isFocused && !readOnly;

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
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [cl.readOnly]: readOnly,
    };

    return (
        <div className={cn(cl.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cl.placeholder}>
                    {`${placeholder}>`}
                </div>
            ) }
            <div className={cl.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={changeHandle}
                    className={cl.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cl.caret}
                        style={{ left: `${caretPosition * 9.60}px` }}
                    />
                )}
            </div>
        </div>
    );
};
