import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text, TextSize, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import cl from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { isLoading, error, data: articles } = useArticleRecommendationsList(3);

    if (isLoading) {
        return (
            <HStack justify="center" max>
                <Loader />
            </HStack>
        );
    }

    if (error || !articles) {
        return (
            <div className={cl.error}>
                <Text text={t('Произошла ошибка')} theme={TextTheme.ERROR} />
            </div>
        );
    }

    return (
        <VStack
            className={classNames('', {}, [className])}
            gap="8"
            data-testid="ArticleRecommendationsList"
        >
            <Text size={TextSize.L} title={t('Рекомендуем')} />
            <ArticleList articles={articles} isLoading={isLoading} target="_blank" />
        </VStack>
    );
});
