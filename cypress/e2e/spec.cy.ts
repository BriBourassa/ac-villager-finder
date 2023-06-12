
describe('template spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://acnhapi.com/v1/villagers/", {
      statusCode: 200,
      fixture: "example.json"
    })
    cy.visit("http://localhost:3000")
  })

  it.skip('should go to a base url', () => {
    cy.url().should('include', '/')
  })

  it.skip('should render a heading', () => {
    cy.get('.header').should('be.visible')
      .contains('Villager Finder')
  })

  it.skip('should render a list of villagers by species', () => {
    cy.get('.display-species-list').should('have.length', 2)
  })


  it('should display the icon and species name of villagers in main display', () => {
    cy.get('[href="/Anteater"] > .single-species > img').should('exist')
      .get('[href="/Anteater"] > .single-species > h1').contains('Anteater')
    cy.get('[href="/Cat"] > .single-species > img').should('exist')
      .get('[href="/Cat"] > .single-species > h1').contains('Cat')
  })



  // it('', () => {
    
  // })
})