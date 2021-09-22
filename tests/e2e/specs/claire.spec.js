// https://docs.cypress.io/api/introduction/api.html

describe("Scenarios for page Claire", () => {
  it("Visits page /claire", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/claire"]').click();
    cy.url().should("include", "/claire");
  });

  it("Assert the title contains the student name", () => {
    cy.get('h2')
      .invoke('text')
      .should('match', /^ Claire Brisbart/)
  })

  it("Check the css of the project buttons", () => {
    cy.get('.project_link').should('have.css', 'background-color', 'rgb(137, 190, 243)')
  })

  it("Verify if the URLs open a new tab", () => {
    cy.get('.external_link').each(($a) => {
      cy.get($a).should('have.attr', 'target', '_blank')
    })
  })
});
