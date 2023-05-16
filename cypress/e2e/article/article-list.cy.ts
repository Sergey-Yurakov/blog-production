describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
            cy.log(JSON.stringify(data));
        });
    });

    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    // it('поиск', { defaultCommandTimeout: 4000 }, () => {
    //     cy.getByTestId('ArticlesPageFilters').type('go');
    // });

    // it('и нажимает таб айти', () => {
    //     cy.getByTestId('Tabs.IT').click();
    //     cy.getByTestId('ArticleList').contains('Ruby');
    //     cy.getByTestId('ArticleList').contains('Scala');
    //     cy.getByTestId('ArticleList').contains('Java');
    // });
    //
    // it('и нажимает таб экономика', () => {
    //     cy.getByTestId('Tabs.ECONOMICS').click();
    //     cy.getByTestId('ArticleList').contains('Экономическая статья - ИНФЛЯЦИЯ!');
    // });
    //
    // it('и нажимает таб наука', () => {
    //     cy.getByTestId('Tabs.SCIENCE').click();
    //     cy.getByTestId('ArticleList').contains('Научная статья - Биология');
    // });
    //
    // it('сортировать по убыванию', { defaultCommandTimeout: 4000 }, () => {
    //     cy.getByTestId('Sort.asc').select('desc');
    //     cy.getByTestId('ArticleList').eq(0).contains(10211);
    // });
    //
    // it('сортировать по названию', { defaultCommandTimeout: 4000 }, () => {
    //     cy.getByTestId('Sort.createdAt').select('title');
    //     cy.getByTestId('ArticleList').eq(0).contains('Golang news');
    // });

    // it('На стабах (фикстурах)', () => {
    //     cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    //     cy.getByTestId('ArticleList').should('exist');
    //     cy.getByTestId('ArticleList').eq(0).contains('Ruby news');
    //     cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    // });

    it.skip('Пример заскипанного теста', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        cy.get('asss').should('exist');
    });
});
