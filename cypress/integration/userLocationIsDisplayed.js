import fakeLocation from '../support/fakeLocation'
describe("Browser based location is dispalyed", () => {

  beforeEach(() => {
    cy.server({enable: false});
  })

  it("for visitor from Stockholm", () => {
    cy.visit("http://localhost:3001", fakeLocation({ latitude: 59.334591, longitude: 18.063240 }));
    cy.get("#location").should("contain", "Stockholm 59°20'4'' N 18°3'47'' E");
  });

  it("for visitor from Umeå", () => {
    cy.visit("http://localhost:3001", fakeLocation({ latitude: 63.825848, longitude: 20.263035 }));
    cy.get("#location").should("contain", "Umeå 63°49'33'' N 20°15'46'' E");
  });

  it("for visitor from Paris", () => {
    cy.visit("http://localhost:3001", fakeLocation({ latitude: 48.858093, longitude: 2.294694 }));
    cy.get("#location").should("contain", "Paris 48°51'29'' N 2°17'40'' E");
  });




});


