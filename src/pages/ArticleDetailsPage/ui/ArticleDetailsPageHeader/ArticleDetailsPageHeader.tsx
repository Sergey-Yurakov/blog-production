import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ArticleEditButton } from '@/features/articleEditButton';
import { getRouteArticles } from '@/shared/const/router';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Buttton';
import { HStack } from '@/shared/ui/redesigned/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);

    const onBackToLIst = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    return (
        <HStack className={cn('', {}, [className])} max justify="between">
            <Button onClick={onBackToLIst}>{t('Назад к списку')}</Button>
            {canEdit && <ArticleEditButton />}
        </HStack>
    );
});
