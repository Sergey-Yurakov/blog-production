import { Fragment, ReactNode } from 'react';

import { Listbox as HListBox } from '@headlessui/react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { Button } from '../../../Buttton/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCl from '../../styles/popup.module.scss';

import cl from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readOnly? : boolean;
    direction?: DropdownDirection;
    label?: string,
}

export const ListBox = (props: ListBoxProps) => {
    const {
        items,
        className,
        defaultValue,
        value,
        readOnly,
        direction = 'bottom right',
        label,
        onChange,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    const labelMods: Mods = {
        [cl.readOnly]: readOnly,
    };

    return (
        <HStack gap="4">
            {label && <span className={cn('', labelMods)}>{`${label}>`}</span> }
            <HListBox
                disabled={readOnly}
                as="div"
                className={cn('', {}, [className, popupCl.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    className={cl.trigger}
                    as="div"
                >
                    <Button disabled={readOnly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={cn(cl.options, {}, optionsClasses)}>
                    {items?.map((item) => (

                        <HListBox.Option
                            key={item.value}
                            disabled={item.disabled}
                            value={item.value}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={cn(cl.item, {
                                    [popupCl.active]: active,
                                    [popupCl.disabled]: item.disabled,
                                }, [])}
                                >
                                    {selected && '!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
