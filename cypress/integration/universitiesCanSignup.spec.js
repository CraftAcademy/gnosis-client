describe("Can sign up ", () => {
  it("As a visitor, I can sign up like a user", () => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up").click();
    cy.get("#signup-form").within(() => {});
  });
});

it("as an University, I can sign up like a university", () => {
  cy.visit("http://localhost:3001");
  cy.get("#sign-up").click();
  cy.get("#signup-form").within(() => {});
});
