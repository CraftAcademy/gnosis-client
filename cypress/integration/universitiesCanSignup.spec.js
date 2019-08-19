describe("Can sign up ", () => {
  it("as a visitor, I can sign up as a University", () => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="accountType"]').select("University");
      cy.get('input[id="email"]').type("harvard@mail.com");
      cy.get('input[id="password"]').type("password1");
      cy.get('input[id="password-confirmation"]').type("password1");
    });
    cy.get("#payment-form").within(() => {
      cy.get('select[id="payment-method"]').select("Card-Payment");
      cy.get('input[id="card-number"]').type("");
      cy.get('input[id="card-owner"]').type("");
      cy.get('input[id="expiration date"]').type("");
      cy.get('input[id="CVC"]').type("");
    })
    cy.get("#submit-payment-button").click();
    cy.contains("Payment successfully");
  });
});
