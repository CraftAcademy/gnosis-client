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
    cy.location("pathname").should("eq", "/payment");
    cy.get("#payment-form").within(() => {
      cy.get('input[id="card-number"]').type("4242 4242 4242 4242");
      cy.get('input[id="card-owner"]').type("Harvard University");
      cy.get('input[id="expiration date"]').type("10-21");
      cy.get('input[id="CVC"]').type("123");
    });
    cy.get("#process-payment").click();
  });
});