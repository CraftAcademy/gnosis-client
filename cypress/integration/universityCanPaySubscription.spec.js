describe("University pay for subscription", () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/subscriptions",
      response: "fixture:successful_subscription_payment_request.json"
    });
    cy.university_login("harvard@mail.com", "password");
    cy.get("#subscribe-button").click();
  });

  it("Payment is successfully processed", () => {
    cy.wait(2000);
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

      const cvcInput = $elements
        .eq(2)
        .contents()
        .find(stripeElementsInputSelector);
      cy.wrap(cvcInput).type("123");
    });

    cy.get("#submit-payment-button").click();
    cy.contains("Payment successful!");
  });
});