import { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sortOrder';
import { Select, SelectOption } from '@/shared/ui/Select';

import cl from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    return (
        <div className={cn(cl.ArticleSortSelector, {}, [className])}>
            <Select
                option={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
                label={t('Сортировать ПО')}
            />
            <Select
                option={orderOptions}
                value={order}
                onChange={onChangeOrder}
                label={t('по')}
                className={cl.order}
            />
        </div>
    );
});
