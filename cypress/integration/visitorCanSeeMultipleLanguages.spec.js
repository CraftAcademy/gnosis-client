describe("Visitor can select language from language list", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
    cy.visit("http://localhost:3001");
  });

  // Initial state using browser with Swedish IP
  it("fall-back language", async () => {
    cy.get("#Language").should("exist");
    cy.get("Swedish");
    cy.click("#Swedish");
    cy.get
  });

  // Select new language from pull down menu (English)

  // Check home button language with new state
  it("default/fall-back language", async () => {
    cy.get("#Language").should("exist");
  });
});
