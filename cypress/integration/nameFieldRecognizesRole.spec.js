describe("Name Field Recognizes Role", () => {
  beforeEach(function() {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up-button").click();
  });

  it("'University' is displayed when user selects 'Uni' account type", () => {
    cy.get("#signup-form").within(() => {
      cy.get('select[id="role"]').select("University");
    });
    cy.get("#userType").should("contain", "University Name");
  });
});
