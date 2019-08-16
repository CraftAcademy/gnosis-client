describe("RG can post article", () => {
  beforeEach(function() {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:saving_article_response.json"
    });
    cy.visit("http://localhost:3001");
  });

  it("RG can post article", () => {
    cy.get("#create-article").click();
    cy.get("#post-article-form").within(() => {
      cy.get("#author").type("John Doe");
      cy.get("#title").type("To be or not to be");
      cy.get("#body").type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      );
      cy.get("#submit-button").click();
    });
    cy.contains("Post successfully created");
  });
});
