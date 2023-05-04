import { screen } from '@testing-library/react';

import { UserRole } from '@/entities/User';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        // findByTestId - нужен для ленивых страниц
        // ищем по id нужную страницу
        const page = await screen.findByTestId('AboutPage');

        // проверяем наличие элемента в доме
        expect(page)
            .toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/asssaa',
        });

        // findByTestId - нужен для ленивых страниц
        // ищем по id нужную страницу
        const page = await screen.findByTestId('NotFoundPage');

        // проверяем наличие элемента в доме
        expect(page)
            .toBeInTheDocument();
    });

    test('Редирект неавторизованного пользователя на главную', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        // findByTestId - нужен для ленивых страниц
        // ищем по id нужную страницу
        const page = await screen.findByTestId('MainPage');

        // проверяем наличие элемента в доме
        expect(page)
            .toBeInTheDocument();
    });

    test('Доступ к закрытой странице для авторизованного пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            // инициализируем пользователя
            initialState: {
                user: {
                    authData: {},
                    _inited: true,
                },
            },
        });

        // findByTestId - нужен для ленивых страниц
        // ищем по id нужную страницу
        const page = await screen.findByTestId('ProfilePage');

        // проверяем наличие элемента в доме
        expect(page)
            .toBeInTheDocument();
    });

    test('Доступ запрещен (отсутствует роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            // инициализируем пользователя
            initialState: {
                user: {
                    authData: {},
                    _inited: true,
                },
            },
        });

        // findByTestId - нужен для ленивых страниц
        // ищем по id нужную страницу
        const page = await screen.findByTestId('ForbiddenPage');

        // проверяем наличие элемента в доме
        expect(page)
            .toBeInTheDocument();
    });

    test('Доступ разрешен (присутствует роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            // инициализируем пользователя
            initialState: {
                user: {
                    authData: { roles: [UserRole.ADMIN] },
                    _inited: true,
                },
            },
        });

        // findByTestId - нужен для ленивых страниц
        // ищем по id нужную страницу
        const page = await screen.findByTestId('AdminPanelPage');

        // проверяем наличие элемента в доме
        expect(page)
            .toBeInTheDocument();
    });
});
