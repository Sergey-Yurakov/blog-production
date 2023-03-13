import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cl from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string;
}

const ArticlesDetailPage = ({ className }: ArticlesDetailPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={cn(cl.ArticlesDetailPage, {}, [className])}>
            ArticlesDetailPage
        </div>
    );
};

export default memo(ArticlesDetailPage);
