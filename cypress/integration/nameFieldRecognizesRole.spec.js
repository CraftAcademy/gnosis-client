describe("Name Field Recognizes Role", () => {
  beforeEach(function() {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    });
    cy.visit("http://localhost:3001");
    cy.get("#sign-up-button").click();
  });

  it("'University Name' is displayed when user selects 'University' account type", () => {
    cy.get("#signup-form").within(() => {
      cy.get('select[id="role"]').select("University");
    });
    cy.get("#userType").should("contain", "University Name");
  });

  it("'Research Group Name' is displayed when user selects 'Research Group' account type", () => {
    cy.get("#signup-form").within(() => {
      cy.get('select[id="role"]').select("Research Group");
    });
    cy.get("#userType").should("contain", "Research Group Name");
  });

  it("'Name' is displayed when user selects 'Reader' account type", () => {
    cy.get("#signup-form").within(() => {
      cy.get('select[id="role"]').select("Reader");
    });
    cy.get("#userType").should("contain", "Name");
  });
});
