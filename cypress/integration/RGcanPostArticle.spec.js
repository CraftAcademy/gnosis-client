describe('RG can post article', () => {
  before(function() {
    cy.visit('http://localhost:3001');
    cy.get('#create-article').click();
}