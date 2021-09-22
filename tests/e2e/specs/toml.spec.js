describe("Profile app", () => {
  it("web component", () => {
    cy.visit("http://localhost:8080/toml");
  });

  it("check border", () => {
    cy.get(".container").should("have.css", "border-radius", "20%");
  });

  it("test button randomize", () => {
    cy.get(".getProject").trigger("mouseover");

    if (cy.get(".getProject").click()) {
      cy.get(".desc").should("be.visible");
    } else {
      cy.get(".desc").should("be.empty");
    }
  });
});
