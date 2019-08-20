describe("Can't create article ", () => {
  it("as a visitor", () => {
    cy.viewport('iphone-6+') 

    cy.visit("http://localhost:3001");
    cy.get("#login-button").should('exist');
    cy.get("#create-article-button").should("not.exist");
  });

  it("as an University", () => {
    cy.viewport('iphone-6+') 

    cy.server();
    cy.university_login("harvard@mail.com", "password");
    cy.contains("Hello harvard@mail.com!");
    cy.get("#login-button").should("not.exist");
    cy.get("#login-form").should("not.exist");
    cy.get("#create-article-button").should("not.exist");
  })
});
