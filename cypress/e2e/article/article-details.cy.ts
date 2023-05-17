let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    // перед каждым тестом статью создаем, тестируем
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.log(JSON.stringify(article));
            cy.visit(`articles/${article.id}`);
        });
    });

    // а потом удаляем из бд
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('И видит содержимое статьи', () => {
        // проверяем, что элемент просто есть на странице
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('ArticleDetails.Text.Header').should('have.text', 'TESTING ARTICLE');
    });

    it('И видит список рекомендаций', () => {
        // проверяем, что элемент просто есть на странице
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        // have.length - длинна
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('И ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        // have.length - длинна
        cy.get('[data-selected=true]').should('have.length', 4);
    });

    it('И ставит оценку (пример на стабах/фикстурах)', () => {
        // мокаем запрос след образом
        // указываем сперва тип запроса - гет, пост и прочее
        // затем часть пути урла, по которому будет запрос
        // затем фикстуру - то есть готовый json файл с данными
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        // have.length - длинна
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
