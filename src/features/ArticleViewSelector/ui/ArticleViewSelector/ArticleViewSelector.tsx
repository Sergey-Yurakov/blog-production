import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Buttton';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cl from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ListIconDeprecated,
            on: () => ListIcon,
        }),
    },
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => TiledIconDeprecated,
            on: () => TiledIcon,
        }),
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div className={cn(cl.ArticleViewSelector, {}, [className])}>
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                            disabled={viewType.view === view}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                className={cn('', {
                                    [cl.notSelected]: viewType.view !== view,
                                })}
                                width={24}
                                height={24}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
            on={
                <Card
                    border="round"
                    className={cn(cl.ArticleViewSelectorRedesigned, {}, [className])}
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                clickable
                                onClick={onClick(viewType.view)}
                                Svg={viewType.icon}
                                className={cn('', {
                                    [cl.notSelected]: viewType.view !== view,
                                })}
                                width={24}
                                height={24}
                            />
                        ))}
                    </HStack>
                </Card>
            }
        />
    );
});
