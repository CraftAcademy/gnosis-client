describe("University pay for subscription", () => {

  beforeEach(() => {
    cy.server();
    cy.university_login("harvard@mail.com", "password");
    cy.get("#subscribe-button").click();
  });

  it("Payment is successfully processed", () => {
    cy.get("#payment-form").within(() => {
      cy.get('input[id="card-number"]').type("4242 4242 4242 4242");
      cy.get('input[id="expiration date"]').type("10-21");
      cy.get('input[id="CVC"]').type("123");
    });
    cy.get("#submit-account-button").click();
    cy.contains("Payment successful!");
  });
});