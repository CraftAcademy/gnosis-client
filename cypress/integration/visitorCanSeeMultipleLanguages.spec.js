describe("Visitor can see home button in", () => {
  before(function () {
    cy.visit("http://localhost:3001");
  });

  it("default/fall-back language", async () => {
    cy.contains("#homebutton",  "Home").should("be.visible");
   
  });
});
