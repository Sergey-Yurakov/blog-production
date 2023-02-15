import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cl from './NotFoundPage.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundProps) => {
    const { t } = useTranslation('notFound');
    return (
        <div className={cn(cl.NotFoundPage, {}, [className])}>
            {t('Страница не найдена') }
        </div>
    );
};
