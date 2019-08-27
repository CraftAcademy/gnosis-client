describe("Visitor can change language from", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
    cy.visit("http://localhost:3001");
    cy.get('#english').click({ force: true });
  });

  it("English to Swedish", () => {
      cy.get('#homebutton').should('contain', 'Home');
      cy.get('#language').should('contain', 'Swedish');
      cy.get('#swedish').click({ force: true });
      cy.get('#homebutton').should('contain', 'Hem');
  });

  it("Swedish to English", () => {
    cy.get('#swedish').click({ force: true });
    cy.get('#homebutton').should('contain', 'Hem');
    cy.get('#language').should('contain', 'Engelska');
  });
});
