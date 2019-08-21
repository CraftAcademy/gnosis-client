describe('User can log in', () => {
  it('successfully', () => {
    cy.visit('http://localhost:3001');
    cy.get('#login-button').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('password')
      cy.get('#login-form-submit').click()
    })
    cy.contains('Hello harvard@harvard.edu')
  })
})