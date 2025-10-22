Cypress.Commands.add('clickAdmin', () =>{
     cy.contains('.oxd-main-menu-item', 'Admin').click();
});

Cypress.Commands.add('clickJob', () =>{
     cy.contains('.oxd-topbar-body-nav-tab-item', 'Job').click();
});

Cypress.Commands.add('clickJobTitles', () =>{
     cy.get('.oxd-topbar-body-nav-tab-link').contains('Job Titles').click(); 
});

Cypress.Commands.add('clickAddJob', () =>{
     cy.get('button.oxd-button--secondary').contains('Add').click();
});

Cypress.Commands.add('typeJobTitles', (jobTitle) =>{
      cy.get('.oxd-form-row').eq(0) 
          .find('input')             
          .type(jobTitle);
});

Cypress.Commands.add('typeJobDescription', (jobDescription) =>{
    cy.get('textarea[placeholder="Type description here"]')
          .type(jobDescription);
});

Cypress.Commands.add('typeJobSpecification', (jobSpecification) =>{
   cy.get('input[type="file"]')
          .selectFile({
            contents: Cypress.Buffer.from('Conteúdo fictício do PDF'),
            fileName: jobSpecification, 
            mimeType: 'application/pdf'
          }, { force: true }); 
});

Cypress.Commands.add('typeJobNote', (jobNote) =>{
     cy.get('.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical').clear().type(jobNote);
});

Cypress.Commands.add('clickSaveJob', () =>{
     cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
});



