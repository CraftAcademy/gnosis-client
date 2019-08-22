describe('University can see payment form after signup', () => {
  before(function () {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:successful_signup_of_university_response.json"
    });
    cy.university_success_signup(
      "university",
      "harvard",
      "harvard@mail.com",
      "password",
      "password"
    );
  });
  it('Can click subscribe button and see payment form', () => {
    cy.get("#submit-account-button").click();
    cy.get("#subscribe-button").click();
    cy.get("#payment-form").should("exist");
  });
});