import stubLocation from "../support/stubLocation";

describe("Visitors Location are showing in Navbar", () => {
  beforeEach(() => {
    cy.server({ enable: false });
  });

  it("Visitor is located in London,", () => {
    cy.visit(
      "http://localhost:3001",
      stubLocation({ latitude: 51.5074, longitude: 0.1278 })
    );
    cy.get("#location").should(
      "contain",
      "London"
    );
  });

  it("Visitor is located in Paris,", () => {
    cy.visit(
      "http://localhost:3001",
      stubLocation({ latitude: 48.8566, longitude: 2.3522 })
    );
    cy.get("#location").should("contain", "Paris");
  });

  it("Visitor is located in Los Angeles,", () => {
    cy.visit(
      "http://localhost:3001",
      stubLocation({ latitude: 34.052235, longitude: -118.243683 })
    );
    cy.get("#location").should(
      "contain",
      "Los Angeles"
    );
  });
});
