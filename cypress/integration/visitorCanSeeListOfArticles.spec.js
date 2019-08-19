
describe('Visitor gets an error when visiting the site', () => {
  before(function () {
    cy.server({enable: false});
    cy.visit("http://localhost:3001");
  });

  it('displays an error if articles are unavailable', async () => {
    cy.get(".articles").contains("Articles are currently unavailable.")
  });

});

describe("Visitor can visit client site connected to api with articles", () => {
  before(function () {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
    cy.visit("http://localhost:3001");
  });

  it("and sees two articles", async () => {
    cy.get(".articles").within(() => {
      cy.get("#article_1");
      cy.get("#article_2");
    });
  });

  it("and sees the content of article 1", async () => {
    cy.get("#article_1").within(() => {
      cy.get("#title").contains("A study on the maladapted social behaviours of pidgeons");
      cy.get("#body").contains("They are seriously mean.");
      cy.get("#date").contains("15th of August, 2019")
      cy.get("#author").contains("Dash L.");
    });
  });

});

