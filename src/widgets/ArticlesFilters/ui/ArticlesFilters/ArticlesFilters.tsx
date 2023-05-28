import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sortOrder';
import { TabsItem } from '@/shared/ui/deprecated/Tabs';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cl from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    search: string;
    type: ArticleType;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeSearch: (value: string) => void;
    onChangeType: (type: TabsItem<ArticleType>) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        sort,
        order,
        search,
        type,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    } = props;
    const { t } = useTranslation('article');

    return (
        <Card className={cn(cl.ArticlesFilters, {}, [className])} padding="24">
            <VStack gap="32">
                <Input
                    data-testid="ArticlesPageFilters"
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
                <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cl.tabs} />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});
