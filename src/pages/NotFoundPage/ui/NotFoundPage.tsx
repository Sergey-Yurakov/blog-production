import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cl from './NotFoundPage.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundProps) => {
    const { t } = useTranslation('notFound');
    return (
        <Page data-testid="NotFoundPage" className={cn(cl.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
});
