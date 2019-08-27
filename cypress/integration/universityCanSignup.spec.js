describe("University Sign-Up", () => {
  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    })
  });
  it("Can successfully sign up", () => {
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
    cy.get('#flash')
      .should('contain', "Your university account successfully created!");
  });



  it("Attempts to sign up with invalid credentials", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/auth",
      response: "fixture:unsuccessful_signing_up_university_response.json",
      status: 404
    });
    cy.university_unsuccessful_signup(
      "university",
      "harvard",
      "harvard@harvard.edu",
      "password",
      "password_confirmation"
    );
    cy.get("#submit-account-button").click();
    cy.get('#flash')
      .should('contain',"Invalid sign up credentials. Please try again.");
  });
});