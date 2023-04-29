import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader/Loader';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cl from './ArticleRecommendationsList.module.scss';

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
