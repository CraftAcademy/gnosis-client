describe('User can log in', () => {
  beforeEach(() => {
    cy.server();
  });
  it('successfully', () => {
    cy.research_group_login("climate_harvard@mail.com", "password");
    cy.contains('Hello climate_harvard@mail.com!')
  })
})