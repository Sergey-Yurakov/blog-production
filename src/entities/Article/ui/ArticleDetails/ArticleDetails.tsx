import { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import {
    getArticleDetailError,
    getArticleDetailIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';

import cl from './ArticleDetails.module.scss';

import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton/ArticleDetailsSkeleton';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailIsLoading);
    const error = useSelector(getArticleDetailError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;
    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <TextDeprecated
                        align={TextAlign.CENTER}
                        title={t('Произошла ошибка при загрузке статьи')}
                    />
                }
                on={
                    <Text
                        align="center"
                        title={t('Произошла ошибка при загрузке статьи')}
                    />
                }
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<ArticleDetailsDeprecated />}
                on={<ArticleDetailsRedesigned />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                className={cn(cl.ArticleDetails, {}, [className])}
                gap="16"
                max
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
