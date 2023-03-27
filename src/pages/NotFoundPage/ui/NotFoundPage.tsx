import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';
import cl from './NotFoundPage.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundProps) => {
    const { t } = useTranslation('notFound');
    return (
        <Page className={cn(cl.NotFoundPage, {}, [className])}>
            {t('Страница не найдена') }
        </Page>
    );
});
