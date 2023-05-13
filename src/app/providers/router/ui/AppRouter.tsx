import { memo, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

import { routeConfig } from '../config/routerCofig';

import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { path, element, authOnly } = route;

        const elements = (
            <Suspense fallback={<PageLoader />}>{element}</Suspense>
        );

        return (
            <Route
                key={path}
                path={path}
                element={
                    authOnly ? (
                        <RequireAuth roles={route.roles}>
                            {elements}
                        </RequireAuth>
                    ) : (
                        elements
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
