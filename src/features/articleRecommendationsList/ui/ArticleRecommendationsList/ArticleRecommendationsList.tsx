import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Text as TextDeprecated,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import cl from './ArticleRecommendationsList.module.scss';

export interface ArticleRecommendationsListProps {
    className?: string;
}

const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
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
                <Skeleton width="100%" height={100} />
            </HStack>
        );
    }

    if (error || !articles) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <div className={cl.error}>
                        <TextDeprecated
                            text={t('Произошла ошибка')}
                            theme={TextTheme.ERROR}
                        />
                    </div>
                }
                on={
                    <div className={cl.error}>
                        <Text text={t('Произошла ошибка')} variant="error" />
                    </div>
                }
            />
        );
    }

    return (
        <VStack
            className={classNames('', {}, [className])}
            gap="8"
            data-testid="ArticleRecommendationsList"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Рекомендуем')}
                    />
                }
                on={<Text size="l" title={t('Рекомендуем')} />}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
            />
        </VStack>
    );
};

export default memo(ArticleRecommendationsList);
