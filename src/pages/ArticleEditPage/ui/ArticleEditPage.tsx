import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-edit');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={cn('', {}, [className])}>
            {isEdit
                ? t('Редактирование статьи с ID = ') + id
                : t('Создание новой статьи')}
        </Page>
    );
};

export default memo(ArticleEditPage);
