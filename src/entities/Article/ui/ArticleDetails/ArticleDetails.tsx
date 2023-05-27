import { memo, useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
    getArticleDetailData,
    getArticleDetailError,
    getArticleDetailIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

import cl from './ArticleDetails.module.scss';

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

    const article = useSelector(getArticleDetailData);
    const isLoading = useSelector(getArticleDetailIsLoading);
    const error = useSelector(getArticleDetailError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} block={block} className={cl.block} />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent key={block.id} block={block} className={cl.block} />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent key={block.id} block={block} className={cl.block} />
                );
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;
    if (isLoading) {
        content = (
            <VStack gap="32" max>
                <Skeleton className={cl.avatar} width={200} height={200} border="50%" />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />
        );
    } else {
        content = (
            <>
                <HStack max justify="center">
                    <Avatar size={200} src={article?.img} className={cl.avatar} />
                </HStack>

                <Text
                    data-testid="ArticleDetails.Text"
                    className={cl.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <VStack gap="4" max data-testid="ArticleDetails.Info">
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} className={cl.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} className={cl.icon} />

                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack className={cn(cl.ArticleDetails, {}, [className])} gap="16" max>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
