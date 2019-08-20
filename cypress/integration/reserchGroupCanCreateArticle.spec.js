describe("Research Group can post article", () => {
  beforeEach(function() {
    cy.server();
  });

  it("successfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:successful_saving_article_response.json"
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
    cy.contains("Article successfully created");
    cy.wait(6000)
    cy.get("#create-article-form").should("not.exist");
  });

  it("unsuccessfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:unsuccessful_saving_article_response.json",
      status: 404
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
    cy.contains("Title can't be blank");
  })
});
