Cypress.Commands.add('typeUsername', (username) =>{
    cy.get('input[name="username"]').clear().type(username);
});

Cypress.Commands.add('typePassword', (password) =>{
    cy.get('input[name="password"]').clear().type(password);
});

Cypress.Commands.add('clickSubmitLogin', () =>{
    cy.get('button[type="submit"]').click();
});