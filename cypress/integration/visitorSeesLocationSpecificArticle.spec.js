import stubLocation from "../support/stubLocation";

describe("Visitor can see articles when visiting the App", () => {
  beforeEach(() => {
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles?**",
      response: "fixture:local_articles.json"
    });
    cy.visit(
      "http://localhost:3001",
      stubLocation({ latitude: 40.73061, longitude: 73.935242 })
    );
  });

  it("Two articles are displayed", async () => {
    cy.get("#article_1");
    cy.get("#article_2");
  });

  it("Article is from Stockholm", async () => {
    cy.get("#local-research").within(() => {
      cy.get("#article_1").within(() => {
        cy.get("#city").contains("Stockholm");
        cy.get("#article_2").within(() => {
          cy.get("#city").contains("Stockholm");
        });
      });
    });
  });
});
