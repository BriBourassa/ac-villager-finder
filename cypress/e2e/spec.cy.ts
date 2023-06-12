describe('Spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://acnhapi.com/v1/villagers/", {
      statusCode: 200,
      fixture: "example.json"
    })
    cy.visit("http://localhost:3000")
  })

  it('should go to a base url', () => {
    cy.url().should('include', '/')
  })

  it('should render a heading', () => {
    cy.get('.header').should('be.visible')
      .contains('Villager Finder')
  })

  it('should render a list of villagers by species, and display the icon and species name of villagers', () => {
    cy.get('[href="/Anteater"] > .single-species > img').should('exist')
      .get('[href="/Anteater"] > .single-species > h1').contains('Anteater')
    cy.get('[href="/Cat"] > .single-species > img').should('exist')
      .get('[href="/Cat"] > .single-species > h1').contains('Cat')
  })

  it('should display a list of the characters of a species and their bios when a species icon is clicked', () => {
    cy.get('[href="/Anteater"] > .single-species > img').click()
    cy.get('.display-img').should('exist')
    cy.get('.stats').contains('Personality: Cranky')
    cy.get('.stats').contains('Hobby: Education')
  })

  it('should return to the home page when the Animal Crossing logo is clicked', () => {
    cy.get('[href="/Anteater"] > .single-species > img').click()
    cy.get('.logo').click()
    cy.url().should('include', '/')
  })
})