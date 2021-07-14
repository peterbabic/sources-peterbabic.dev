/// <reference types="cypress" />
describe("Simplest test should", () => {
  it.only("visit base URL", () => {
    cy.visit("/")
  })
})
