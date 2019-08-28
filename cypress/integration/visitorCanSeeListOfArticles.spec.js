describe("Visitor can see articles on the homepage", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
    cy.visit("http://localhost:3001");
  });

  it("Two articles are displayed", async () => {
    cy.get("#article_1");
    cy.get("#article_2");
  });

  it("Article content is visible", async () => {
    cy.get("#article_1").within(() => {
      cy.get("#title").contains("A study on behaviours of pidgeons");
      cy.get("#body").contains("They are adapting to human lifestyle.");
      cy.get("#date").contains("15th of August, 2019");
      cy.get("#author").contains("Dash L.");
    });
  });
});

describe("Visitor does not see articles on the homepage", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: { "data": [] }
    });
    cy.visit("http://localhost:3001");
  });

  it("Articles are unavailable", async () => {
    cy.get(".articles")
      .should('contain', "Articles are currently unavailable.");
  });
});
