let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        // достаем данные, которые приходят из профиля и
        // добавляем к странице профиля id пользователя
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${profileId}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        // проверяем, что инпут заполнен значением 'test'
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'user');
    });

    it('И редактирует его', () => {
        const newName = 'new';
        const newLastname = 'lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
