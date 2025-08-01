class DashboardPage {
  addItem(name) {
    cy.get('input[placeholder="Add item"]').type(name);
    cy.contains('Add').click();
  }

  editItem(oldName, newName) {
    cy.contains(oldName).parent().contains('Edit').click();
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns(newName);
      cy.contains(oldName).parent().contains('Edit').click();
    });
  }

  deleteItem(name) {
    cy.contains(name).parent().contains('Delete').click();
  }

  assertItemVisible(name) {
    cy.contains(name).should('be.visible');
  }
}

module.exports = new DashboardPage();
