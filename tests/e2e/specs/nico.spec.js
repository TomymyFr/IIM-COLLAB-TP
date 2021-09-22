describe("Scenarios for page Nico", () => {
  it("Visits page /nico", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/nico"]').click();
    cy.url().should("include", "/nico");
  });

  it("Should go to my GitHub profile when my name is clicked", () => {
    cy.get("#nameGit").should("have.attr", "href", "https://github.com/Nvcq");
  });

  it("Should switch to a grabbing cursor when hovering the page", () => {
    cy.get("main").trigger("mouseover");
    cy.get("main").should("have.css", "cursor", "grab");
  });
});
