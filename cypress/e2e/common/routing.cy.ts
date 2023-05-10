import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            // через метод should можно проверить существование элемента на странице,
            // кол-во элементов и прочее
            cy.get('[data-testid=MainPage]')
                .should('exist');
        });

        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');
            // через метод should можно проверить существование элемента на странице,
            // кол-во элементов и прочее
            // selectByTestId - хук для testId
            cy.get(selectByTestId('MainPage'))
                .should('exist');
        });

        it('Переход открывает несуществующий маршрут', () => {
            cy.visit('/asasasas');
            // через метод should можно проверить существование элемента на странице,
            // кол-во элементов и прочее
            cy.get(selectByTestId('NotFoundPage'))
                .should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        // beforeEach - это когда надо делать запросы на бэк 1+ раз,
        // то можно вынести это в beforeEach/afterEach
        beforeEach(() => {
            cy.login();
        });

        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');
            // через метод should можно проверить существование элемента на странице,
            // кол-во элементов и прочее
            // selectByTestId - хук для testId
            cy.get(selectByTestId('ProfilePage'))
                .should('exist');
        });

        it('Переход открывает страницу со списком статей', () => {
            cy.visit('/articles');
            // через метод should можно проверить существование элемента на странице,
            // кол-во элементов и прочее
            // selectByTestId - хук для testId
            cy.get(selectByTestId('ArticlesPage'))
                .should('exist');
        });
    });
});
