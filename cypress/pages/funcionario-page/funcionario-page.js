Cypress.Commands.add('clickPim', () =>{
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
});

Cypress.Commands.add('clickAddEmployee', () =>{
    cy.contains('Add Employee').click();
});

Cypress.Commands.add('typeFirstNameEmployee', (firstName) =>{
    cy.get('.oxd-input.oxd-input--active.orangehrm-firstname').clear().type(firstName);
});

Cypress.Commands.add('typeMiddleNameEmployee', (middleName) =>{
    cy.get('.oxd-input.oxd-input--active.orangehrm-middlename').clear().type(middleName);
});

Cypress.Commands.add('typeLastNameEmployee', (lastName) =>{
    cy.get('.oxd-input.oxd-input--active.orangehrm-lastname').type(lastName);
});

Cypress.Commands.add('typeidEmployee', (id) =>{
    cy.contains('.oxd-input-group', 'Employee Id').find('input').clear().type(id);
});

Cypress.Commands.add('clickSaveEmployee', () =>{
    cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
});

Cypress.Commands.add('clickSaveEmployee', () =>{
    cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
});

Cypress.Commands.add('clickEmployeeList', () =>{
    cy.get('.oxd-topbar-body-nav-tab-item').click();
});


Cypress.Commands.add('typeIdSearch', (id) => {
  cy.get('.oxd-form').contains('.oxd-input-group', 'Employee Id').find('input').clear().type(id);
});

Cypress.Commands.add('clickSearchEmployee', () =>{
    cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
});

Cypress.Commands.add('clickIdSearchResuçt', () =>{
    cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
});


