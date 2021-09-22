describe("Page Axel", () => {
    it("Visits page /axel", () => {
      cy.visit("http://localhost:8080/");
      cy.get('[href="/axel"]').click();
      cy.url().should("include", "/axel");
    });
  
    it("Button", () => {
        it('Button', () => {
            cy.get('#Button').should('have.text', 'Projet Dev')
        })
    });
  });
  
  