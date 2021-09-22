// https://docs.cypress.io/api/introduction/api.html

describe("Scenarios for Ayoub page", () => {
  it("Visits page /ayoub", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/ayoub"]').click();
    cy.url().should("include", "/ayoub");
  });

  it("Verify if the content is correct", () => {
    cy.visit("http://localhost:8080/ayoub");
    cy.get("h1").contains("Hi, I'm El Guendouz Ayoub - Ayoub9360 👋");
    cy.get(".main > :nth-child(2)").contains(
      "I am a third year student in web development !"
    );
    cy.get(".main > :nth-child(3)").contains(
      "🔭 I’m currently working at Spendesk"
    );
    cy.get(".main > :nth-child(4)").contains(
      "👨‍💻 All of my projects are available in my website"
    );
    cy.get(".main > :nth-child(5)").contains(
      "📫 How to reach me ayoub.elguendouz@gmail.com"
    );
    cy.get(".main > :nth-child(6)").contains(
      "📄 Know about my experiences with my resume"
    );
  });

  it("Verify if all projects are fetch", () => {
    cy.visit("http://localhost:8080/ayoub");
    cy.get(":nth-child(1) > h3").contains("Spendesk");
    cy.get(":nth-child(2) > h3").contains("Responsive check bot");
    cy.get(":nth-child(3) > h3").contains("Yibzee");
  });

  it("Verify spendesk link", () => {
    cy.visit("http://localhost:8080/ayoub");
    const currentURL = cy.url();
    cy.get('[href="https://www.spendesk.com/en/"]').click();
    cy.url().should("not.eq", currentURL);
  });
});
