describe("Research Group Sign-Up", () => {
  beforeEach(function() {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    });
  });
  it("Can successfully sign up with valid registration key", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:successful_research_group_sign_up.json"
    });
    cy.research_group_successful_signup(
      "research_group",
      "Cancer Research Group",
      "cancer_research@mail.com",
      "password",
      "password",
      "abcd1234"
    );
    cy.get("#submit-account-button").click();
    cy.get("#flash").should(
      "contain",
      "Your research_group account successfully created!"
    );
  });
  it("Attempts to sign up with invalid registration key", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response:"fixture:unsuccessful_research_group_sign_up.json",
      status: 422
    });
    cy.research_group_successful_signup(
      "research_group",
      "Cancer Research Group",
      "cancer_research@mail.com",
      "password",
      "password",
      "wrong_registration_key"
    );
    cy.get("#submit-account-button").click();
    cy.get("#flash").should(
      "contain",
      "Invalid registration key. Please try again."
    );
  });
});
