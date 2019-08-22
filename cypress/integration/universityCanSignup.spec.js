describe("University Sign-Up", () => {
  beforeEach(function() {
    cy.server();
  });
  it("User can successfully sign-up as a University", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:successful_signup_of_university_response.json"
    });
    cy.university_success_signup(
      "university",
      "harvard",
      "harvard@mail.com",
      "password",
      "password"
    );
    cy.get("#submit-account-button").click();
    cy.contains("Your university account successfully created!");
  });



  it("User can't sign up with invalid credentials", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:unsuccessful_signing_up_university_response.json",
      status: 404
    });
    cy.university_unsucces_signup(
      "university",
      "harvard",
      "harvard@mail.com",
      "password",
      "password_confirmation"
    );
    cy.get("#submit-account-button").click();
    cy.contains("Invalid sign up credentials. Please try again.");
  });
});