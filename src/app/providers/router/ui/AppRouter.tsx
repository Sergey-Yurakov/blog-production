import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
import { routeConfig } from '@/app/providers/router/config/routerCofig';
import { AppRoutesProps } from '@/shared/types/router';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const {
            path,
            element,
            authOnly,
        } = route;

        const elements = (
            <Suspense fallback={<PageLoader />}>
                {element}
            </Suspense>
        );

        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? (
                    <RequireAuth
                        roles={route.roles}
                    >
                        {elements}
                    </RequireAuth>
                ) : elements}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig)
                .map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
