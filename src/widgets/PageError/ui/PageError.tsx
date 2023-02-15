import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Buttton/Button';
import cl from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('error');

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={cn(cl.PageError, {}, [className])}>
            <h2>
                {t('Произошла непредвиденная ошибка')}
            </h2>
            <Button onClick={reloadPage} className={cl.btn}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
