import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import cl from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const {
        type,
        sort,
        order,
        search,
        view,
        onChangeSearch,
        onChangeSort,
        onChangeView,
        onChangeType,
        onChangeOrder,
    } = useArticleFilters();

    return (
        <div className={cn('', {}, [className])}>
            <div className={cl.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cl.search}>
                <Input
                    data-testid="ArticlesPageFilters"
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cl.tabs} />
        </div>
    );
});
