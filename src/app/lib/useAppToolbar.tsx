import { ReactElement } from 'react';

import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    // создаем объект сопоставления маршрута с компонентом ScrollToolbar
    // то есть показываем ScrollToolbar только на нужных страницах
    const tollbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    };

    return tollbarByAppRoute[appRoute];
}
