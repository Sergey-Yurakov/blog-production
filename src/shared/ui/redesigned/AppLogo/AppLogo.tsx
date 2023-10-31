import { memo } from 'react';

import AppSvg from '@/shared/assets/icons/Yurakov_S.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';

import cl from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            max
            justify="center"
            className={cn(cl.appLogoWrapper, {}, [className])}
        >
            <AppSvg
                width={size}
                height={size}
                color="black"
                className={cl.appLogo}
            />
            <div className={cl.gradientBig} />
            <div className={cl.gradientSmall} />
        </HStack>
    );
});
