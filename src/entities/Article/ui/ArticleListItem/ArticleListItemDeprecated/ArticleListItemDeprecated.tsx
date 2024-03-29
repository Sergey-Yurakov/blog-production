import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Buttton';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

import { ArticleBlockType, ArticleView } from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleListItemProps } from '../ArticleListItemProps/ArticleListItemProps';

import cl from './ArticleListItemDeprecated.module.scss';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cl.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cl.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={cn(cl.ArticleListItem, {}, [className, cl[view]])}
                data-testid="ArticleListItem"
            >
                <Card>
                    <div className={cl.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cl.username} />
                        <Text text={article.createdAt} className={cl.date} />
                    </div>
                    <Text title={article.title} className={cl.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cl.img}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cl.textBlock} />
                    )}
                    <div className={cl.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                            <Button>{t('Читать далее ...')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            className={cn(cl.ArticleListItem, {}, [className, cl[view]])}
            to={getRouteArticleDetails(article.id)}
            target={target}
            data-testid="ArticleListItem"
        >
            <Card>
                <div className={cl.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article.img}
                        alt={article.title}
                        className={cl.img}
                    />
                    <Text text={article.createdAt} className={cl.date} />
                </div>
                <div className={cl.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cl.title} />
            </Card>
        </AppLink>
    );
});
