import'../../pages/login-page/login-page'
import '../../pages/cargo-page/cargo-page'
import { faker } from '@faker-js/faker'

describe('Cadastrar cargo - Cenário 02', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.wait(6000);
        cy.typeUsername('Admin');
        cy.typePassword('admin123');
        cy.clickSubmitLogin();
    });

    it('CT07 - Cadastro de cargo com todos os campos preenchidos corretamente', () => {
        cy.clickAdmin();
        cy.clickJob();
        cy.clickJobTitles();
        cy.clickAddJob();

        var jobTitle = faker.person.jobTitle();
        var jobDescription = faker.lorem.sentence(10);
        var jobNote = faker.lorem.sentence(6);
        var jobSpecification = "Arquivo de teste.pdf";

        cy.typeJobTitles(jobTitle);
        cy.typeJobDescription(jobDescription);
        cy.typeJobSpecification(jobSpecification);
        cy.typeJobNote(jobNote);
        cy.clickSaveJob();

        cy.get('.oxd-toast-content--success')
          .should('be.visible')
          .and('contain', 'Successfully Saved');

          cy.get('.oxd-table-body') 
          .should('contain', jobTitle);

    });

    it('CT10 - Cadastro de cargo sem preencher campo obrigatório', () => {
        cy.clickAdmin();
        cy.clickJob();
        cy.clickJobTitles();
        cy.clickAddJob();

        var jobDescription = faker.lorem.sentence(10);
        var jobNote = faker.lorem.sentence(6);
        var jobSpecification = "Arquivo de teste.pdf";

        cy.typeJobDescription(jobDescription);
        cy.typeJobSpecification(jobSpecification);
        cy.typeJobNote(jobNote);
        cy.clickSaveJob();

        cy.get('.oxd-form-row').eq(0) 
            .find('span.oxd-text--span') 
            .should('be.visible')
            .and('contain', 'Required');

        cy.url().should('include', '/admin/saveJobTitle'); 

    });

    it('CT11 - Cadastro de cargo duplicado', () => {
        cy.clickAdmin();
        cy.clickJob();
        cy.clickJobTitles();
        cy.clickAddJob();

        var jobTitle = faker.person.jobTitle();
        cy.typeJobTitles(jobTitle);

        cy.clickSaveJob();
        
        cy.clickAddJob();
        cy.typeJobTitles(jobTitle);

        cy.get('.oxd-form-row').eq(0) 
            .find('span.oxd-text--span')
            .should('be.visible')
            .and('contain', 'Already exists');

        cy.url().should('include', '/admin/saveJobTitle'); 

    });
    
});