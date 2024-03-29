import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Buttton';

import cl from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation('error');

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={cn(cl.PageError, {}, [className])}>
            <h2>{t('Произошла непредвиденная ошибка')}</h2>
            <Button onClick={reloadPage} className={cl.btn}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});
