class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[placeholder="Password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  assertErrorVisible() {
    cy.contains('Invalid credentials').should('be.visible');
  }
}

module.exports = new LoginPage();
