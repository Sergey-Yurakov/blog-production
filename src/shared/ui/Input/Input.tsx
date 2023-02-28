import { classNames as cn } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cl from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    isOpen?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        isOpen = false,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
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
        onChange?.(e.target.value);
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

    return (
        <div className={cn(cl.InputWrapper, {}, [className])}>
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
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cl.caret}
                        style={{ left: `${caretPosition * 9.60}px` }}
                    />
                )}
            </div>

        </div>
    );
});
