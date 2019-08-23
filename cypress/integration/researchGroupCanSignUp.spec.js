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
  it("User can successfully sign-up as a Research Group w/ Keys", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:research_group_successfully_signsup.json"
    });
    cy.research_group_successful_signup(
      "research_group",
      "Cancer Research Group",
      "cancerresearch@mail.com",
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
  it("User can't sign up without valid Rubscription Key", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:research_group_unsuccessfully_signsup.json",
      status: 404
    });
    cy.research_group_successful_signup(
      "research_group",
      "Cancer Research Group",
      "cancerresearch@mail.com",
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
