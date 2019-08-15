describe("Visitor can visit client site connected to api with articles", () => {
  before(function() {
    cy.visit("http://localhost:3001");
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
  });

  it("and sees at least two articles", async () => {
    cy.get(".articles").within(() => {
      cy.get("#article_1").within(() => {
        cy.get("#title").contains("A study on the maladapted social behaviors of pidgeons");
        cy.get("#body").contain("They are seriously mean.");
        cy.get("#date").contain("14-08-2019");
        cy.get("#author").contain("Dash L.");
      });
      cy.get("#article_2").within(() => {
        cy.get("#title").contains("The beneficial nature of caffeine");
        cy.get("#body").contain("It's good for your body.");
        cy.get("#date").contain("14-08-2019");
        cy.get("#author").contain("Max A.");
      });
    });
  });
});
