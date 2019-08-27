describe('User Log-Out', () => {
   beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    })
  });

  it("Can log out successfully", () => {
    cy.route({
      method: 'DELETE',
      url: 'http://localhost:3000/api/v0/auth/sign_out',
      response: 'fixture:successful_user_logout.json',
    })
    cy.visit("http://localhost:3001")
    cy.university_login("harvard@mail.com", "password");
    cy.get("#logout-button").should("exist");
    cy.get("#logout-button").click();
    cy.get("#flash").should("contain", "Successful logout. Welcome back soon!")
    cy.get("#login-button").should("exist");
  });
});