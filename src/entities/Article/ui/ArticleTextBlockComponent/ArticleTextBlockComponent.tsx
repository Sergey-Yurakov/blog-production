import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import { ArticleTextBlock } from '../../model/types/article';

import cl from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div className={cn('', {}, [className])}>
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cl.title}
                            />
                        }
                        on={<Text title={block.title} className={cl.title} />}
                    />
                )}
                {block.paragraphs.map((paragraph) => (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                key={paragraph}
                                text={paragraph}
                                className={cl.paragraph}
                            />
                        }
                        on={
                            <Text
                                key={paragraph}
                                text={paragraph}
                                className={cl.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
