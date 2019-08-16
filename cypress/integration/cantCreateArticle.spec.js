describe("Can't create article ", () => {
  it("as a visitor", () => {
    cy.visit("http://localhost:3001");
    cy.get("#create-article").should("not.exist");
  });

  it("as an University", () => {
    cy.server();
    cy.login("harvard@mail.com", "password");
    cy.get("#create-article").should("not.exist");
  })
});
