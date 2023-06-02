import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Buttton/Button';
import { Button } from '@/shared/ui/redesigned/Buttton/Button';

interface ArticleEditButtonProps {
    className?: string;
}

export const ArticleEditButton = memo((props: ArticleEditButtonProps) => {
    const { className } = props;
    const article = useSelector(getArticleDetailData);
    const { t } = useTranslation('article-details');

    const navigate = useNavigate();
    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ButtonDeprecated className={className} onClick={onEditArticle}>
                    {t('Редактировать')}
                </ButtonDeprecated>
            }
            on={
                <Button className={className} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            }
        />
    );
});
