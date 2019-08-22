describe('University can buy yearly subscription after sign up', () => {
  before(function () {
    cy.server();
  });
  it('Subscribes successfully', () => {
    cy.university_success_signup(
      "university",
      "harvard",
      "harvard@mail.com",
      "password",
      "password_confirmation"
    );
    cy.get("#submit-account-button").click();
  });
});