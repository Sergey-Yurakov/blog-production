import { memo } from 'react';

import { useSelector } from 'react-redux';

import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

import { getArticleDetailData } from '../../../model/selectors/articleDetails';
import { renderArticleBlock } from '../renderArticleBlock';

import cl from './ArticleDetailsRedesigned.module.scss';

export const ArticleDetailsRedesigned = memo(() => {
    const article = useSelector(getArticleDetailData);

    return (
        <>
            <Text
                data-testid="ArticleDetails.Text"
                title={article?.title}
                size="l"
                bold
            />
            <Text data-testid="ArticleDetails.Text" text={article?.subtitle} />
            <AppImage
                src={article?.img}
                fallback={<Skeleton width="100%" height={420} border="16px" />}
                className={cl.image}
            />

            {article?.blocks.map(renderArticleBlock)}
        </>
    );
});
