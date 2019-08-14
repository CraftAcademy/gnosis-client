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
    cy.get('.articles').within(() => {
      cy.get('#article_1').within(() => {
        cy.get('#title').contains('Article 1 title')
        cy.get('#body').contain('Article 1 body')
        cy.get('#date').contain('2019-10-24')
        cy.get('#author').contain('Max')
      })
      cy.get('#article_2').within(() => {
        cy.get('#title').contains('Article 2 title')
        cy.get('#body').contain('Article 2 body')
        cy.get('#date').contain('2019-11-24')
        cy.get('#author').contain('Dash')
      })
    })

  })
})