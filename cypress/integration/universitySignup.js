describe("University Sign-Up", () => {
  beforeEach(function() {
    cy.server();
  });
  it("User can successfully sign-up as a University", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/registration",
      response: "fixture:successful_saving_uniAccount_response.json"
    });
    cy.university_signup(
      "University",
      "harvard",
      "harvard@mail.com",
      "password",
      "password_confirmation"
    );
    cy.get("#payment-form").within(() => {
      cy.get('select[id="payment-type"]').select("card-payment");
      cy.get('input[id="card-number"]').type("6666 6666 6666 6666");
      cy.get('input[id="card-owner"]').type("JOHN DOE FOSHO");
      cy.get('input[id="expiration date"]').type("10-21");
      cy.get('input[id="CVC"]').type("666");
    });
    cy.get("#submit-account-button").click();
    cy.contains("Payment successful! University Account successfully created!");
  });


  it("User can't sign up without all form fields filled out (sad path)", () => {
    cy.get("#sign-up").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="accountType"]').select("University");
      cy.get('input[id="name"]').type("Fat Bob");
      cy.get('input[id="password"]').type("password");
      cy.get('input[id="password-confirmation"]').type("password");
    });
    cy.get("#payment-form").within(() => {
      cy.get('select[id="payment-type"]').select("card-payment");
      cy.get('input[id="card-number"]').type("6666 6666 6666 6666");
      cy.get('input[id="card-owner"]').type("");
      cy.get('input[id="expiration date"]').type("10-21");
      cy.get('input[id="CVC"]').type("666");
    });
    cy.get("#submit-account-button").click();
    cy.contains("A valid email is required!");
  });
});


