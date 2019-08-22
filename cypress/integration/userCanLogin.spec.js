describe('User can log in', () => {
  beforeEach(() => {
    cy.server();
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