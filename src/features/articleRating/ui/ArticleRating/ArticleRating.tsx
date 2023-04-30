import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation('article-details');
    const userData = useSelector(getUserAuthData);
    const {
        data,
        isLoading,
    } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutations] = useRateArticle();

    const rating = data?.[0];

    const handleRate = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutations({
                rate: starsCount,
                feedback,
                articleId,
                userId: userData?.id ?? '',
            });
        } catch (e) {
            // handle error
            console.log(e);
        }
    }, [articleId, rateArticleMutations, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRate(starsCount, feedback);
    }, [handleRate]);

    const onCancel = useCallback((starsCount: number) => {
        handleRate(starsCount);
    }, [handleRate]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={cn('', {}, [className])}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
            rate={rating?.rate}
        />
    );
};

export default memo(ArticleRating);
