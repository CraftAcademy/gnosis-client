describe("Visitors Location are showing in Navbar", () => {
   
    it('Visitor is located in New York,',() => {
      cy.visit("http://localhost:3001", stubLocation({ latitude: 40.730610, longitude: 73.935242 }));
      cy.get("#navbar-location").should("contain", "New York 40° 43' 50.1960' N 73° 56' 6.8712' W");
    })
  });