describe("University pay for subscription", () => {

  beforeEach(() => {
    cy.server();
    cy.university_login("harvard@mail.com", "password");
    cy.get("#subscribe-button").click();
  });

  it("Payment is successfully processed", () => {
    cy.get(".__PrivateStripeElement > iframe").then($elements => {
      const stripeElementsInputSelector = ".InputElement";

      const creditInput = $elements
        .eq(0)
        .contents()
        .find(stripeElementsInputSelector);
      cy.wrap(creditInput).type("4242424242424242");

      const expirationInput = $elements
        .eq(1)
        .contents()
        .find(stripeElementsInputSelector);
      cy.wrap(expirationInput).type("12/59");
    });

    cy.get("#submit-account-button").click();
    cy.contains("Payment successful!");
  });
});