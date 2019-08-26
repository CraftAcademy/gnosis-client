describe("Visitor can see articles when visiting the App", () => {
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
      cy.get("#title").contains(
        "A study on the maladapted social behaviours of pidgeons"
      );
      cy.get("#body").contains("They are seriously mean.");
      cy.get("#date").contains("15th of August, 2019");
      cy.get("#author").contains("Dash L.");
    });
  });
});

describe("Visitor does not see articles when visiting the site", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("http://localhost:3001");
  });

  it("Articles are unavailable", async () => {
    cy.get(".articles")
      .should('contain', "Articles are currently unavailable.");
  });
});
