import stubLocation from "../support/stubLocation";

describe("If visitor visit site and click yes on lacation share, location should be posted to backend", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
    cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v0/articles",
    response: "fixture:visitor_location_saved_if_click_yes_sharing_loacation.json",
    status: 200
  });
 })
})


describe("Visitor can see articles when visiting the App", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
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
