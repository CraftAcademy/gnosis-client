describe('User can log in', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
  });
  it('Successfully', () => {
    cy.research_group_login("climate_harvard@mail.com", "password");
    cy.get('#flash').should('contain', 'Hello climate_harvard@mail.com!')
  })
  it('With invalid credentials', () => {
    cy.research_group_wrong_login("climate_harvard@mail.com", "wrong_password");
    cy.get('#flash').should('contain', 'Invalid login credentials. Please try again.')
  })
})