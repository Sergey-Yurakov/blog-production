import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../../ui/Stack';
import { Button } from '../../ui/Buttton/Button';
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

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cl.optionsBottomLeft,
    'bottom right': cl.optionsBottomRight,
    'top left': cl.optionsTopLeft,
    'top right': cl.optionsTopRight,
};

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
                className={cn(cl.ListBox, {}, [className])}
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
                                    [cl.active]: active,
                                    [cl.disabled]: item.disabled,
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
