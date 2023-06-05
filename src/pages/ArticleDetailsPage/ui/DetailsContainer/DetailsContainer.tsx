import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Card
            border="partial"
            padding="24"
            maxWidth
            className={cn('', {}, [className])}
        >
            <ArticleDetails id={id} />
        </Card>
    );
});
