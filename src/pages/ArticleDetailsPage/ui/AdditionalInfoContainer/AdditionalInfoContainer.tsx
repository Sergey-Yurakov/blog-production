import { memo } from 'react';

import { useSelector } from 'react-redux';

import {
    getArticleDetailData,
    getArticleDetailIsLoading,
} from '@/entities/Article';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

import cl from './AdditionalInfoContainer.module.scss';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailData);
    const isLoading = useSelector(getArticleDetailIsLoading);

    if (isLoading) {
        return <Skeleton width={264} height={210} border="40px" />;
    }

    if (!article) {
        return null;
    }

    // todo: добавить скелетон
    return (
        <Card padding="24" border="round" className={cn(cl.card, {}, [])}>
            <ArticleAdditionalInfo
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
            />
        </Card>
    );
});
