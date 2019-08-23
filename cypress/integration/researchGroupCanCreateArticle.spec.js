describe("Research Group can post article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    })
  });

  it("Article posts successfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:successful_saving_article_response.json",
      status: 200
    });
    cy.research_group_login("climate_harvard@mail.com", "password");
    cy.contains("Hello climate_harvard@mail.com!");
    cy.get("#create-article-button").click();
    cy.get("#create-article-form").within(() => {
      cy.get("#author").type("John Doe");
      cy.get("#title").type("To be or not to be");
      cy.get("#body").type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      );
      cy.get("#submit-article-button").click();
    });

    cy.get('#flash').should('contain', "Article successfully created")
    cy.wait(7000)
    cy.get('#flash').should('not.contain', "Article successfully created")
    cy.get("#create-article-form").should("not.exist");
  });

  it("Article posts unsuccessfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:unsuccessful_saving_article_response.json",
      status: 200
    });
    cy.research_group_login("climate_harvard@mail.com", "password");
    cy.contains("Hello climate_harvard@mail.com!");
    cy.get("#create-article-button").click();
    cy.get("#create-article-form").within(() => {
      cy.get("#author").type("John Doe");
      cy.get("#body").type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      );
      cy.get("#submit-article-button").click();
    });
    cy.get('#flash').should('contain', "Title can't be blank")
  })
});
