describe("Can sign up ", () => {
  it("As a visitor, I can sign up like a user", () => {
    cy.visit("http://localhost:3001");
    cy.get("#sign-up").click();
    cy.get("#signup-form").within(() => {
      cy.get('select[id="method"]').select('User')
      cy.get('input[id="email"]').type('JohnDoe@hotmail.com')
      cy.get('input[id="password"]').type('password')
      cy.get('input[id="password-confirmation"]').type('password')
    })  
    });
  });


it("as an University, I can sign up like a university", () => {
  cy.visit("http://localhost:3001");
  cy.get("#sign-up").click();
  cy.get("#signup-form").within(() => {
    cy.get('select[id="method"]').select('University')
    cy.get('input[id="email"]').type('harvard@mail.com')
    cy.get('input[id="password"]').type('password1')
    cy.get('input[id="password-confirmation"]').type('password1')
  })
});

it("as an Research Group, I can sign up like a Research Group", () => {
  cy.visit("http://localhost:3001");
  cy.get("#sign-up").click();
  cy.get("#signup-form").within(() => {
    cy.get('select[id="method"]').select('Research-Group')
    cy.get('input[id="email"]').type('climate_harvard@mail.com')
    cy.get('input[id="password"]').type('password2')
    cy.get('input[id="password-confirmation"]').type('password2')
  
  })
});
