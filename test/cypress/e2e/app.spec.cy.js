describe('Preview Page', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080')
  })
  it('should have a title', () => {
    cy.get('#App').find('[ref="Title"]').should('have.attr', 'texture-text', 'Video Thumbnail Preview')
  })

})
