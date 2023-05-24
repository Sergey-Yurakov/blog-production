import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Buttton';
import { Icon } from '@/shared/ui/deprecated/Icon';

import cl from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={cn(cl.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    disabled={viewType.view === view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={cn('', {
                            [cl.notSelected]: viewType.view !== view,
                        })}
                        width={24}
                        height={24}
                    />
                </Button>
            ))}
        </div>
    );
});
