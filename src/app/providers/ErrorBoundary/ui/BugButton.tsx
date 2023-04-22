import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Buttton/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const { t } = useTranslation('error');
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={onThrow}>
            {t('показать ошибку') }
        </Button>
    );
};
