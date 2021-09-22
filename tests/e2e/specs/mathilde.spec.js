describe("Mathilde Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/mathilde");
  });
  it("Check if h1 is good !", () => {
    cy.get("h1").should("have.text", "Mathilde Asselin -");
  });
});
