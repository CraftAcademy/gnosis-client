describe('University is redirected to payment form  after login', () => {
  before(function () {
    cy.server();
  });
  it('Subscribes successfully', () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:successful_signup_of_uniAccount_response.json"
    });
    cy.university_success_signup(
      "university",
      "harvard",
      "harvard@mail.com",
      "password",
      "password"
    );
    cy.get("#submit-account-button").click();
    cy.get("#subscribe-button").click();
    cy.get("#payment-form").should("exist");
  });
});