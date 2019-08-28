describe('User Log-Out', () => {
   beforeEach(() => {
    cy.server();
  });

  it("University can log out successfully", () => {
    cy.route({
      method: 'DELETE',
      url: 'http://localhost:3000/api/v0/auth/sign_out',
      response: 'fixture:successful_user_logout.json',
    })
    cy.visit("http://localhost:3001")
    cy.university_login("harvard@harvard.edu", "password");
    cy.get("#logout-button").should("exist");
    cy.get("#logout-button").click();
    cy.get("#flash").should("contain",  "You have successfully logged out.")
    cy.get("#login-button").should("exist");
  });

  it("Reseach Group can log out successfully", () => {
    cy.route({
      method: 'DELETE',
      url: 'http://localhost:3000/api/v0/auth/sign_out',
      response: 'fixture:successful_user_logout.json',
    })
    cy.visit("http://localhost:3001")
    cy.research_group_login("climate_research@harvard.edu", "password");
    cy.get("#logout-button").should("exist");
    cy.get("#logout-button").click();
    cy.get("#flash").should("contain",  "You have successfully logged out.")
    cy.get("#login-button").should("exist");
  });
});