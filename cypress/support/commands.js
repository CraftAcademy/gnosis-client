Cypress.Commands.add("research_group_login", (email, password) => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v0/auth/sign_in",
    response: "fixture:successful_research_group_login.json"
  });
  cy.visit("http://localhost:3001");
  cy.get("#login-button").click();
  cy.get("#login-form").within(() => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
  });
  cy.get("#login-form-submit").click();
});

Cypress.Commands.add("university_login", (email, password) => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v0/auth/sign_in",
    response: "fixture:successful_university_login.json"
  });
  cy.visit("http://localhost:3001");
  cy.get("#login-button").click();
  cy.get("#login-form").within(() => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
  });
  cy.get("#login-form-submit").click();
});

Cypress.Commands.add("research_group_wrong_login", (email, password) => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v0/auth/sign_in",
    response: "fixture:unsuccessful_research_group_login.json",
    status: 401
  });
  cy.visit("http://localhost:3001");
  cy.get("#login-button").click();
  cy.get("#login-form").within(() => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
  });
  cy.get("#login-form-submit").click();
});

Cypress.Commands.add("university_login", (email, password) => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v0/auth/sign_in",
    response: "fixture:successful_university_login.json"
  });
  cy.visit("http://localhost:3001");
  cy.get("#login-button").click();
  cy.get("#login-form").within(() => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
  });
  cy.get("#login-form-submit").click();
});

Cypress.Commands.add(
  "university_successful_signup",
  (role, name, email, password, password_confirmation) => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up-button").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="role"]').select(role);
      cy.get('input[id="name"]').type(name);
      cy.get('input[id="email"]').type(email);
      cy.get('input[id="password"]').type(password);
      cy.get('input[id="password-confirmation"]').type(password_confirmation);
    });
  }
);

Cypress.Commands.add(
  "university_unsuccessful_signup",
  (role, name, email, password) => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up-button").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="role"]').select(role);
      cy.get('input[id="name"]').type(name);
      cy.get('input[id="email"]').type(email);
      cy.get('input[id="password"]').type(password);
    });
  }
);

Cypress.Commands.add(
  "research_group_successful_signup",
  (role, name, email, password, password_confirmation, registration_key) => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up-button").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="role"]').select(role);
      cy.get('input[id="name"]').type(name);
      cy.get('input[id="email"]').type(email);
      cy.get('input[id="password"]').type(password);
      cy.get('input[id="password-confirmation"]').type(password_confirmation);
      cy.get('input[id="registration-key"]').type(registration_key);
    });
  }
);

Cypress.Commands.add(
  "research_group_unsuccessful_signup",
  (role, name, email, password, password_confirmation, registration_key) => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up-button").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="role"]').select(role);
      cy.get('input[id="name"]').type(name);
      cy.get('input[id="email"]').type(email);
      cy.get('input[id="password"]').type(password);
      cy.get('input[id="password-confirmation"]').type(password_confirmation);
      cy.get('input[id="registration-key"]').type(registration_key);
    });
  }
);

