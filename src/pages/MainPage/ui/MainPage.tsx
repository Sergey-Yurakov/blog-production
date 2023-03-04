import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
