import { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs as TabsDeprecated, TabsItem } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: TabsItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabsItem<ArticleType>[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <TabsDeprecated
                    className={cn('', {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onChangeType}
                />
            }
            on={
                <Tabs
                    className={cn('', {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onChangeType}
                    direction="column"
                    align="start"
                />
            }
        />
    );
});
