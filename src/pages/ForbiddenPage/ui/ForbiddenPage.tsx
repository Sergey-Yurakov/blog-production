import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation('forbidden-page');

    return (
        <Page>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
});

export default ForbiddenPage;