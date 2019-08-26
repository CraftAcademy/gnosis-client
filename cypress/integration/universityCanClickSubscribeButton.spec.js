describe('University can see payment form after signup', () => {

  beforeEach(() => {
    cy.server();
  });
  
  it('Can click subscribe button and see payment form', () => {
    
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:successful_signup_of_university_response.json"
    });
    cy.university_successful_signup(
      "university",
      "harvard",
      "harvard@mail.com",
      "password",
      "password"
    );
    cy.get("#submit-account-button").click();
    cy.get("#subscribe-button").click();
    cy.get("#payment-form").should("exist");
  });

  it("Subscribe button does not show to users with different roles", () => {
    cy.server();
    cy.research_group_login("climate_harvard@mail.com", "password");
    cy.get("#subscribe-button").should("not.exist");
  });
});