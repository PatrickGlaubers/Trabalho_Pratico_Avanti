import'../../pages/login-page/login-page'
import '../../pages/funcionario-page/funcionario-page'
import { faker } from '@faker-js/faker';

describe('Cadastrar funcionário - Cenário 03', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.wait(6000);
    cy.typeUsername('Admin');
    cy.typePassword('admin123');
    cy.clickSubmitLogin();
  });

  it('CT14 - Validar cadastro de funcionário com dados válidos', () => {
    var id = faker.string.numeric(4);
    cy.clickPim();
    cy.clickAddEmployee();
    cy.typeFirstNameEmployee(faker.person.firstName());
    cy.typeMiddleNameEmployee(faker.person.middleName());
    cy.typeLastNameEmployee(faker.person.lastName());
    cy.typeidEmployee(id);
    cy.clickSaveEmployee();
    cy.wait(4000);
    cy.clickPim();
    cy.typeIdSearch(id);
    cy.clickSearchEmployee();
    
    cy.get('.oxd-table-cell.oxd-padding-cell').contains(id).should('be.visible');
  });

  it('CT15 - Validar cadastro sem preencher o campo Nome obrigatório', () => {
    var id = faker.string.numeric(4);
    cy.clickPim();
    cy.clickAddEmployee();
    cy.typeMiddleNameEmployee(faker.person.middleName());
    cy.typeLastNameEmployee(faker.person.lastName());
    cy.typeidEmployee(id);
    cy.clickSaveEmployee();

    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').contains('Required').should('be.visible');
    
  });

  it('CT16 - Validar cadastro com ID de Funcionário já existente', () => {
    var id = faker.string.numeric(4);
   
    cy.clickPim();
    cy.clickAddEmployee();
    cy.typeFirstNameEmployee(faker.person.firstName());
    cy.typeMiddleNameEmployee(faker.person.middleName());
    cy.typeLastNameEmployee(faker.person.lastName());
    cy.typeidEmployee(id);
    cy.clickSaveEmployee();
    cy.wait(4000);

    cy.clickAddEmployee();
    cy.typeFirstNameEmployee(faker.person.firstName());
    cy.typeMiddleNameEmployee(faker.person.middleName());
    cy.typeLastNameEmployee(faker.person.lastName());
    cy.typeidEmployee(id);
    cy.clickSaveEmployee();

    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').contains('Employee Id already exists').should('be.visible')

  });
})