// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("research_group_login", (email, password) => {
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v0/auth/sign_in",
    response: "fixture:research-group-login.json"
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
    response: "fixture:university-login.json"
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
  "university_success_signup",
  (accountType, name, email, password, password_confirmation) => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="accountType"]').select(accountType);
      cy.get('input[id="name"]').type(name);
      cy.get('input[id="email"]').type(email);
      cy.get('input[id="password"]').type(password);
      cy.get('input[id="password-confirmation"]').type(password_confirmation);
    });
  }
);

Cypress.Commands.add(
  "university_unsucces_signup",
  (accountType, name, email, password, password_confirmation) => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="accountType"]').select(accountType);
      cy.get('input[id="name"]').type(name);
      cy.get('input[id="email"]').type(email);
      cy.get('input[id="password"]').type(password);
      
    });
  }
);