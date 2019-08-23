describe("Visitor can see home button in", () => {
  before(function () {
    cy.visit("http://localhost:3001");
  });

  it("default/fall-back language (En)", async () => {
    cy.get("header home button...");
    cy.should(something... "home")
  });

  // open browser in "incognito mode" or use cy.visit setting to mock
  it("local language (Sv)", async () => {
    cy.get("header home button...");
    cy.should(something... "hem")
  });
});