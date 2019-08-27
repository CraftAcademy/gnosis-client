describe("University can pay for subscription", () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    });
    cy.university_login("harvard@harvard.edu", "password");
    cy.get("#subscribe-button").click();
  });

  it("Payment is successfully processed", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/subscriptions",
      response: "fixture:successful_subscription_payment_request.json"
    });
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
    cy.wait(200);
    cy.contains("Payment successful");
  });


  it("Payment fails due to negative response from back-end", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/subscriptions",
      response: "fixture:unsuccessful_subscription_payment_request.json",
      status: 402
    });
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
    cy.contains("Payment failed");
  });

  it("Payment fails due to invalid inputs", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/subscriptions",
      response: "fixture:unsuccessful_subscription_payment_request.json",
      status: 402
    });
    cy.wait(2000);
    cy.get(".__PrivateStripeElement > iframe").then($elements => {
      const stripeElementsInputSelector = ".InputElement";

      const creditInput = $elements
        .eq(0)
        .contents()
        .find(stripeElementsInputSelector);
      cy.wrap(creditInput).type("424242424242424");

      const expirationInput = $elements
        .eq(1)
        .contents()
        .find(stripeElementsInputSelector);
      cy.wrap(expirationInput).type("12/18");

      const cvcInput = $elements
        .eq(2)
        .contents()
        .find(stripeElementsInputSelector);
      cy.wrap(cvcInput).type("123");
    });

    cy.get("#submit-payment-button").click();
    cy.contains("Something went wrong, please try again.");
  });
});