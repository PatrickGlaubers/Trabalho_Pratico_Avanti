describe('login sistema', () => {

  // caso 01 . login com sucesso!
  it('fazer o login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const loginInfo = {
      username: "Admin",
      password: "admin123"
    }

    cy.get('input[name="username"]').type(loginInfo.username);
    cy.get('input[name="password"]').type(loginInfo.password);

    cy.get('button[type="submit"]').click();

  })
})