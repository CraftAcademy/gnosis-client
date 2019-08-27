describe("Create article restrictions", () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    })
  })


  it("Visitor can not see Create Article button", () => {
    cy.visit("http://localhost:3001");
    cy.get("#login-button").should("exist");
    cy.get("#create-article-button").should("not.exist");
  });

  it("University can not see Create Article button", () => {
    cy.university_login("harvard@harvard.edu", "password");
    cy.contains("Hello harvard@harvard.edu!");
    cy.get("#login-button").should("not.exist");
    cy.get("#login-form").should("not.exist");
    cy.get("#create-article-button").should("not.exist");
  });
});
