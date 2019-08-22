describe("Universities can't create articles", () => {
  it("Visitors can't create articles", () => {
    cy.visit("http://localhost:3001");
    cy.get("#login-button").should("exist");
    cy.get("#create-article-button").should("not.exist");
  });

  it("Create Article button not shown for University", () => {
    cy.server();
    cy.university_login("harvard@mail.com", "password");
    cy.contains("Hello harvard@mail.com!");
    cy.get("#login-button").should("not.exist");
    cy.get("#login-form").should("not.exist");
    cy.get("#create-article-button").should("not.exist");
  });
});
