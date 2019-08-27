describe('University gets payment form after signup', () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    })
  });
  
  it('Can click subscribe button and get payment form', () => {
    
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:successful_signup_of_university_response.json"
    });
    cy.university_successful_signup(
      "university",
      "harvard",
      "harvard@harvard.edu",
      "password",
      "password"
    );
    cy.get("#submit-account-button").click();
    cy.get("#subscribe-button").click();
    cy.get("#payment-form").should("exist");
  });

  it("Subscribe button is not visible to user with different role", () => {
    cy.server();
    cy.research_group_login("climate_research@harvard.edu", "password");
    cy.get("#subscribe-button").should("not.exist");
  });
});