describe("University can see Registration Keys after subscribing", () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json",
      status: 200
    });
  });

  it("Subscribed University can access profile page and see registration keys", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/users/1",
      response: "fixture:university_registration_keys.json",
      status: 200
    });
    cy.subscribed_university_login("harvard@mail.com", "password");
    cy.get("#subscribe-button").should("not.exist");
    cy.get("#profile-button").click();
    cy.contains("Your Profile");
    cy.contains("Registration Keys:");
    cy.contains("b3tDSWucTHtzWLNNGFdgagip");
    cy.contains("U9YT35JejpfKDy1vfuWTVLyb");
    cy.contains("dWCWyfnNn4DVFEHzAAz7b6pw");
    cy.contains("6evmpvxxJmHxvWdNZzZYKa4i");
    cy.contains("fGygSg6Fxjav78tKEbLzS3TB");
  })

  it("Unsubscribed University cannot see registration keys on profile", () => {
    cy.university_login("harvard@mail.com", "password");
    cy.get("#subscribe-button").should("exist");
    cy.get("#profile-button").click();
    cy.contains("Your Profile");
    cy.get("#registration-keys-title").should("not.exist");
  });

})