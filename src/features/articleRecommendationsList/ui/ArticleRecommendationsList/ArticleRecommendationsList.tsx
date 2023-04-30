import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';

import cl from './ArticleRecommendationsList.module.scss';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const {
        isLoading,
        error,
        data: articles,
    } = useArticleRecommendationsList(3);

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
                <Text
                    text={t('Произошла ошибка')}
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    }

    return (
        <VStack
            className={classNames('', {}, [className])}
            gap="8"
        >
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
            />
        </VStack>
    );
});
