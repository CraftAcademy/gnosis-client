describe("University pay for subscription", () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    });
    cy.subscribed_university_login("harvard@mail.com", "password");
  });

  it("University can access profile page and see registration keys", () => {
    cy.get("#subscribe-button").should("not.exist");
    cy.get("#profile-button").click();
    cy.contains("Your Profile");
  })

})