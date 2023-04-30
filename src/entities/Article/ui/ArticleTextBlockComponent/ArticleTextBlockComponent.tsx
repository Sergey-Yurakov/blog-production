import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import cl from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={cn('', {}, [className])}>
            {block.title && (
                <Text
                    title={block.title}
                    className={cl.title}
                />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cl.paragraph}
                />
            ))}
        </div>
    );
});
