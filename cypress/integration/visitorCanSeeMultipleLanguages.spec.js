describe("Visitor can see home button in", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
    cy.visit("http://localhost:3001");
  });

  // // Initial state using browser with Swedish IP
  // it("default/fall-back language", async () => {
  //   cy.contains("#homebutton").should("be.visible");
  // });

  // Select new language from pull down menu (English)

  // Check home button language with new state
  it("default/fall-back language", async () => {
    cy.contains("#homebutton", "Home").should("be.visible");
  });
});
