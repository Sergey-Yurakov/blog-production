import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';

import { ArticleImageBlock } from '../../model/types/article';

import cl from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={cn('', {}, [className])}>
            <img src={block.src} alt={block.title} className={cl.image} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </div>
    );
});
