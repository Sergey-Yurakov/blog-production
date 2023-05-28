import { Fragment, ReactNode, useMemo } from 'react';

import { Listbox as HListBox } from '@headlessui/react';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Buttton/Button';
import { Icon } from '../../../Icon';
import { mapDirectionClass } from '../../styles/consts';
import popupCl from '../../styles/popup.module.scss';

import cl from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readOnly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
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

    const optionsClasses = [mapDirectionClass[direction], popupCl.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    const labelMods: Mods = {
        [cl.readOnly]: readOnly,
    };

    return (
        <HStack gap="4">
            {label && <span className={cn('', labelMods)}>{`${label}>`}</span>}
            <HListBox
                disabled={readOnly}
                as="div"
                className={cn('', {}, [className, popupCl.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cl.trigger} as="div">
                    <Button
                        addonRight={<Icon Svg={ArrowIcon} />}
                        variant="filled"
                        disabled={readOnly}
                    >
                        {selectedItem?.content ?? defaultValue}
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
                                <li
                                    className={cn(
                                        cl.item,
                                        {
                                            [popupCl.active]: active,
                                            [popupCl.disabled]: item.disabled,
                                            [popupCl.selected]: selected,
                                        },
                                        [],
                                    )}
                                >
                                    {selected}
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
