describe("Research Group can upload PDF file with article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:articles.json"
    });
  });
  it("File is correctly uploaded", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/articles",
      response: "fixture:successful_saving_article_response.json",
      status: 200
    });
    cy.research_group_login("climate_research@harvard.edu", "password");
    cy.get("#create-article-button").click();
    cy.get("#create-article-form").within(() => {
      cy.get("#title").type("To be or not to be");
      cy.get("#body").type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      );
      const selector = "#file-upload";
      const fixturePath = "research.pdf"; 
      const type = "application/pdf"; 

      cy.get(selector).then(subject =>
        cy.window().then(win =>
          cy
            .fixture(fixturePath, "base64")
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
              const el = subject[0];
              const testFile = new win.File([blob], name, { type });
              const dataTransfer = new win.DataTransfer();
              dataTransfer.items.add(testFile);
              el.files = dataTransfer.files;
              cy.wrap(subject).trigger("change", { force: true });
            })
        )
      );
      cy.get("#submit-article-button").click();
    });
  });
});
