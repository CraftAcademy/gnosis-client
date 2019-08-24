describe("Visitor can change language from", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
    });
    cy.visit("http://localhost:3001");
  });

  it("English to Swedish", () => {
      cy.get('#homebutton').should('contain', 'Home');
      cy.get('#Language').should('contain', 'Swedish');
      cy.get('#Swedish').click({ force: true });
  });

  it("Swedish to English", () => {
    cy.get('#homebutton').should('contain', 'Home');
    cy.get('#Language').should('contain', 'Swedish');
    cy.get('#Swedish').click({ force: true });
    cy.get('#homebutton').should('contain', 'Hem');
    cy.get('#Language').should('contain', 'English');
    cy.get('#English').click({ force: true });
  });
});
