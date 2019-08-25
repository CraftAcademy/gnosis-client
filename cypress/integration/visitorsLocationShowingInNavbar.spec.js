import stubLocation from '../support/stubLocation';

describe("Visitors Location are showing in Navbar", () => {
  beforeEach(() => {
    cy.visit('url', { onBeforeLoad: (win) => { cy.mockGeolocation(win, lat, long) } })
   
    it('Visitor is located in New York,',() => {
      cy.visit("http://localhost:3001", stubLocation({ latitude: 40.730610, longitude: 73.935242 }));
      cy.get("#navbar-location").should("contain", "New York 40° 43' 50.1960' N 73° 56' 6.8712' W");
    });

    it('Visitor is located in Kiruna,',() => {
      cy.visit("http://localhost:3001", stubLocation({ latitude: 67.85572, longitude: 20.22513 }));
      cy.get("#navbar-location").should("contain", "Kiruna 67°51'20.59 N 20°13'30.47 E");
    });

    it('Visitor is located in Los Angeles,',() => {
      cy.visit("http://localhost:3001", stubLocation({ latitude: 34.052235, longitude: -118.243683 }));
      cy.get("#navbar-location").should("contain", "Los Angeles 67°51'20.59 N 20°13'30.47 E");
    })
  });