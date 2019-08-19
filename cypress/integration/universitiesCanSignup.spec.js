describe("Can sign up ", () => {
  it("As a visitor, I can sign up as a University", () => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="accountType"]').select("University");
      cy.get('input[id="name"]').type("harvard@email.com");
      cy.get('input[id="email"]').type("harvard@email.com");
      cy.get('input[id="password"]').type("password1");
      cy.get('input[id="password-confirmation"]').type("password1");
    });
    cy.get("#payment-form").within(() => {
      cy.get('select[id="payment-type"]').select("card-payment");
      cy.get('input[id="card-number"]').type("6666 6666 6666 6666");
      cy.get('input[id="card-owner"]').type("JOHN DOE FOSHO");
      cy.get('input[id="expiration date"]').type("10-21");
      cy.get('input[id="CVC"]').type("666");
    })
    cy.get("#submit-payment-button").click();
    cy.contains("Payment successful! University Account successfully created!");
  });
});
