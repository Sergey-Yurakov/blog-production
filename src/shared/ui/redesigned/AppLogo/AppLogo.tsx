import { memo } from 'react';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { HStack } from '../../deprecated/Stack';

import cl from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack max justify="center" className={cn(cl.appLogoWrapper, {}, [className])}>
            <div className={cl.gradientBig} />
            <div className={cl.gradientSmall} />
            <AppSvg width={size} height={size} color="black" className={cl.appLogo} />
        </HStack>
    );
});
