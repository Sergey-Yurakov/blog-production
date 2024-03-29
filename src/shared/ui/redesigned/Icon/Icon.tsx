import React, { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cl from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    absoluteBtn?: boolean;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        absoluteBtn,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={cn(cl.Icon, {}, [!absoluteBtn ? className : ''])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                style={{
                    width,
                    height,
                }}
                type="button"
                className={cn(cl.button, {}, [absoluteBtn ? className : ''])}
                onClick={props.onClick}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
