describe("Scenarios for page Tom", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/tomb");
  });

  it("Visits page /tomb on server", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/tomb"]').click();
    cy.url().should("include", "/tomb");
  });

  it("Check if div #tomb is rendering", () => {
    cy.get("#tomb").should("be.visible");
  });
  it("Check title h1 text is correct", () => {
    cy.get("h1").should("have.text", "Hello, je suis Tom");
  });
  it("Check if train is clickable and have animation", () => {
    cy.get("#train").click({ waitForAnimations: false });
    cy.get("#train").should("have.css", "animation");
  });
});
