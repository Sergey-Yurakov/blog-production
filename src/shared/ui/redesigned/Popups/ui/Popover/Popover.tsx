import { ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { mapDirectionClass } from '../../styles/consts';
import popupCl from '../../styles/popup.module.scss';

import cl from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, direction = 'bottom right', children } = props;

    const menuClasses = [mapDirectionClass[direction], popupCl.menu];

    return (
        <HPopover className={cn('', {}, [className, popupCl.popup])}>
            <HPopover.Button as="div" className={popupCl.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={cn(cl.panel, {}, menuClasses)}>{children}</HPopover.Panel>
        </HPopover>
    );
}
