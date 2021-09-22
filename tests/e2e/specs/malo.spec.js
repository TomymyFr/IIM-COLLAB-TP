describe("Scenarios for page Malo", () => {
  it("Check if first project displayed is Autodistribution", () => {
    cy.visit("http://localhost:8080/malo");

    cy.get('[class="projects"]').should(
      "have.text",
      "Autodistribution Web APP  Click to Shuffle"
    );
  });

  it("Check if second project displayed is not Autodistribution", () => {
    cy.visit("http://localhost:8080/malo");

    cy.get('[class="projects"]').not(
      "have.text",
      "Autodistribution Web APP  Click to Shuffle"
    );
  });
});
