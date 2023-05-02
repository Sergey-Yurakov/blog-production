import { HTMLAttributeAnchorTarget, memo } from 'react';

import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { RoutePath } from '@/shared/const/router';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Buttton';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';

import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cl from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
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
            <div className={cn(cl.ArticleListItem, {}, [className, cl[view]])}>
                <Card>
                    <div className={cl.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cl.username} />
                        <Text text={article.createdAt} className={cl.date} />
                    </div>
                    <Text title={article.title} className={cl.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cl.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cl.textBlock} />
                    )}
                    <div className={cl.footer}>
                        <AppLink
                            to={RoutePath.article_details + article.id}
                            target={target}
                        >
                            <Button>
                                {t('Читать далее ...')}
                            </Button>
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
            to={RoutePath.article_details + article.id}
            target={target}
        >
            <Card>
                <div className={cl.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cl.img} />
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
