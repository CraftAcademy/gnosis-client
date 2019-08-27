describe('User Log-In', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
  });
  it('Can successfully log in', () => {
    cy.research_group_login("climate_research@harvard.edu", "password");
    cy.get('#flash').should('contain', 'Hello climate_research@harvard.edu!')
  })
  it('Attempts to log in with invalid credentials', () => {
    cy.research_group_wrong_login("climate_research@harvard.edu", "wrong_password");
    cy.get('#flash').should('contain', 'Invalid login credentials. Please try again.')
  })
})