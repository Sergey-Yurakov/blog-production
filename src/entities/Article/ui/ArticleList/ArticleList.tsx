import { HTMLAttributeAnchorTarget, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton/ArticleListItemSkeleton';

import cl from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                key={index}
                view={view}
                className={cl.card}
            />
        ));

// todo: сюда потом можно добавить виртуализацию, через react virtuozo
export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const { t } = useTranslation('article');

    if (!isLoading && !articles.length) {
        return (
            <div className={cn(cl.ArticleList, {}, [className, cl[view]])}>
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    className={cn(cl.ArticleList, {}, [className, cl[view]])}
                    data-testid="ArticleList"
                >
                    {articles.map((article) => (
                        <ArticleListItem
                            article={article}
                            view={view}
                            target={target}
                            key={article.id}
                            className={cl.card}
                        />
                    ))}
                    {isLoading && getSkeletons(view)}
                </div>
            }
            on={
                <HStack
                    wrap="wrap"
                    gap="16"
                    className={cn(cl.ArticleListRedesigned, {}, [])}
                    data-testid="ArticleList"
                >
                    {articles.map((article) => (
                        <ArticleListItem
                            article={article}
                            view={view}
                            target={target}
                            key={article.id}
                            className={cl.card}
                        />
                    ))}
                    {isLoading && getSkeletons(view)}
                </HStack>
            }
        />
    );
});
