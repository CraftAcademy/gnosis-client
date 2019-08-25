import stubLocation from "../support/stubLocation";

describe("Visitor can see location - specific articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    });
    cy.visit(
      "http://localhost:3001",
      stubLocation({ latitude: 59.3293, longitude: 18.0686 })
    );
  });

  it("Two location-specific articles are displayed", async () => {
    cy.get("#article_1");
    cy.get("#article_2");
  });

  it("Article is from Stockholm", async () => {
    cy.get("#article_1").within(() => {
      cy.get("#city").contains("Stockholm");
      cy.get("#article_2").within(() => {
        cy.get("#city").contains("Stockholm");
      });
    });
  });
});
