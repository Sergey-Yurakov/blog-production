import { memo } from 'react';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';

import cl from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <HStack max justify="center" className={cn(cl.appLogoWrapper, {}, [className])}>
            <div className={cl.gradientBig} />
            <div className={cl.gradientSmall} />
            <AppSvg className={cl.appLogo} />
        </HStack>
    );
});
