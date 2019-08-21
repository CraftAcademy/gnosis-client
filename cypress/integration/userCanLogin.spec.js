describe('User can log in', () => {
  beforeEach(() => {
    cy.server();
  });
  it('successfully', () => {
    cy.research_group_login("climate_harvard@mail.com", "password");
    cy.get('#flash').should('contain', 'Hello climate_harvard@mail.com!')
  })
  it('with invalid credentials', () => {
    cy.research_group_login("climate_harvard@mail.com", "wrong_password");
    cy.get('#flash').should('contain', 'Invalid credentials!')
  })
})