describe("Visitor can visit client site connected to api with articles", () => {
  before(function() {
    // Initiates API host server and initiates GET request from Client to API
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
    // Visits client webpage.  ** This must happen after Client to API server calls.
    cy.visit("http://localhost:3001");
  });

  it("and sees two articles", async () => {
    cy.get(".articles").within(() => {
      cy.get("#article_1");
      cy.get("#article_2");
    });
  });

  it("and sees the content of article 1", async () => {
    cy.get("#article_1").within(() => {
      cy.get("#title").contains("A study on the maladapted social behaviors of pidgeons");
      cy.get("#body").contains("They are seriously mean.");
      cy.get("#date").contains("15th of August, 2019")
      cy.get("#author").contains("Dash L.");
    });
  });
});
