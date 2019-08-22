describe('University can buy yearly subscription after sign up', () => {
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
    cy.location("pathname").should("eq", "/payment");
    cy.get('#flash').should('contain', 'Your university account successfully created!')
    cy.get("#payment-form").within(() => {
      cy.get('input[id="card-number"]').type("4242 4242 4242 4242");
      cy.get('input[id="card-owner"]').type("Harvard University");
      cy.get('input[id="expiration date"]').type("10-21");
      cy.get('input[id="CVC"]').type("123");
    });
    cy.get("#process-payment").click();
    cy.location("pathname").should("eq", "/user_profile");
    cy.get('#flash').should('contain', 'Payment was successful!')
  });
});