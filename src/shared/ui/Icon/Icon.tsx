import React, { memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import cl from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
    } = props;

    return (
        <Svg className={cn(inverted ? cl.inverted : cl.Icon, {}, [className])} />
    );
});
