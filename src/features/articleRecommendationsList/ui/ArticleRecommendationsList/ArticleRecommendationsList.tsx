import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { HStack, VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import { Loader } from 'shared/ui/Loader/Loader';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

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
            <Page>
                <Text
                    text={t('Произошла ошибка')}
                    theme={TextTheme.ERROR}
                />
            </Page>
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
                virtualized={false}
            />
        </VStack>
    );
});
