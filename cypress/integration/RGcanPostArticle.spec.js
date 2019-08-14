describe('RG can post article', () => {
  it("RG can post article", () => {
    cy.visit("http://localhost:3001");
    cy.get("#create-article").click();
    cy.get("#post-article-form").within(() => {
      cy.get("#author-id").type("John Doe");
      cy.get("#title").type("To be or not to be");
      cy.get("#body").type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      );
      cy.get("#submit-button").click();
    });
    cy.contains("Post successfully created");
  });
})