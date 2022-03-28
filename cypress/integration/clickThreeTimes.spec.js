// bigButton.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
// `npx cypress open` to run

describe("Button Component", () => {
  it("Is clicked once and the counter increments to one", () => {
    cy.visit("http://localhost:3000/");
    // 1. click button once
    cy.findByRole("button", { name: /0/i }).click();
  });

  it("Is clicked twice and the counter increments to two", () => {
    // 2. Click button twice
    cy.findByRole("button", { name: /1/i }).click();
  });

  it("Is clicked three times and the counter increments to three", () => {
    // 3. Click button three times
    cy.findByRole("button", { name: /2/i }).click();
  });

  it("User clicks button four times and the counter increments to zero", () => {
    // 4. Click button four times
    cy.findByRole("button", { name: /3/i }).click();
  });
});
