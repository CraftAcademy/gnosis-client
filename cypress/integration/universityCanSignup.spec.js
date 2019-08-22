describe("University Sign-Up", () => {
  beforeEach(function() {
    cy.server();
  });
  it("User can successfully sign-up as a University", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:successful_signup_of_uniAccount_response.json"
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



  it("User can't sign up without all form fields filled out (sad path)", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:unsuccessfully_signing_up_uniAccount_response.json",
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
    cy.contains("No field can be blank!");
  });
});