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
  it("fall-back language", () => {
      cy.contains("#homebutton", "Home").should("be.visible");
      cy.get("#Language").contains('Language').next('#English').then($el=>{
      cy.wrap($el).invoke('show')
      cy.wrap($el).contains('English').click()
    })
  });

  // Select new language from pull down menu (English)

  // Check home button language with new state
  it("default/fall-back language", () => {
    cy.get("#Language").should("exist");
  });
});
