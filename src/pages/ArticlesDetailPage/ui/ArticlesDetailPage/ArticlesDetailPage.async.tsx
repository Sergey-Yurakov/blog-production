import { lazy } from 'react';

export const ArticlesDetailPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesDetailPage')), 1500);
}));
