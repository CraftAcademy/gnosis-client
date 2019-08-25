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
  });

  it("Visitor is located in Stockholm,", () => {
    cy.visit(
      "http://localhost:3001",
      stubLocation({ latitude: 59.3293, longitude: 18.0686 })
    );
    
  })
});