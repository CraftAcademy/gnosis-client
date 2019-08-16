describe("Can't create article ", () => {
  it("as a visitor", () => {
    cy.visit("http://localhost:3001");
    cy.get("#create-article").should("not-exist");
  });
});
