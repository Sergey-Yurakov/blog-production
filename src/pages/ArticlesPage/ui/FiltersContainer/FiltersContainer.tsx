import { memo } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;

    const { type, sort, order, search, onChangeSearch, onChangeSort, onChangeType, onChangeOrder } =
        useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            type={type}
            sort={sort}
            search={search}
            order={order}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            onChangeOrder={onChangeOrder}
        />
    );
});
