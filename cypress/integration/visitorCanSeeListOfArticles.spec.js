describe('', () => {
  before(function () {
    cy.visit('http://localhost:3001')
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v0/articles',
      response: 'fixture:articles.json',
    })
  })

  it('sees at least two articles', async () => {
    cy.contains('article 1 author')
    cy.contains('article 1 date')
    cy.contains('article 1 title')
    cy.contains('article 1 body')

    cy.contains('article 2 author')
    cy.contains('article 2 date')
    cy.contains('article 2 title')
    cy.contains('article 2 body')
  })
})