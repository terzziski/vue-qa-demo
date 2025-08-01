const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

describe('Login and Item Management', () => {
  it('Login with valid credentials', () => {
    LoginPage.visit();
    LoginPage.fillUsername('admin');
    LoginPage.fillPassword('1234');
    LoginPage.submit();

    // ✅ Assert that dashboard input is visible after successful login
    cy.get('input[placeholder="Add item"]').should('be.visible');
  });

  it('Login with invalid credentials', () => {
    LoginPage.visit();
    LoginPage.fillUsername('wrong');
    LoginPage.fillPassword('wrong');
    LoginPage.submit();
    LoginPage.assertErrorVisible();
  });

  it('Add, edit, and delete an item', () => {
    LoginPage.visit();
    LoginPage.fillUsername('admin');
    LoginPage.fillPassword('1234');
    LoginPage.submit();

    DashboardPage.addItem('QA Item');
    DashboardPage.assertItemVisible('QA Item');

    DashboardPage.editItem('QA Item', 'Updated QA Item');
    DashboardPage.assertItemVisible('Updated QA Item');

    DashboardPage.deleteItem('Updated QA Item');
    cy.contains('Updated QA Item').should('not.exist');
  });
});
