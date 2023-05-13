import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'БиологиЯ',
    img: 'http://phonoteka.org/uploads/posts/2022-02/1645056345_43-phonoteka-org-p-biologicheskii-fon-43.jpg',
    views: 10,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'SCIENCE',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    // делаем запрос и передаем данные в боди
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'asaw' },
        body: article ?? defaultArticle,
    }).then(({ body }) => {
        return body;
    });
};

export const removeArticle = (articleId: string) => {
    // делаем запрос и удаляем статью
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asaw' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
