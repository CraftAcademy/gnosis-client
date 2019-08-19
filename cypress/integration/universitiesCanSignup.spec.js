describe("Can sign up ", () => {
  it("as a visitor, I can sign up as a University", () => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="method"]').select("University");
      cy.get('input[id="email"]').type("harvard@mail.com");
      cy.get('input[id="password"]').type("password1");
      cy.get('input[id="password-confirmation"]').type("password1");
    });
    cy.get("#submit-account-button").click();
    cy.contains("Account successfully created");
  });
});
