/// <reference types="cypress" />
import { parse } from "date-fns"

describe("Date list should", () => {
  it("have dates sorted chronologically", () => {
    cy.visit("/")

    const parseDate = date => parse(date, "dd.MM.yyyy", new Date())
    let prevDate = parseDate("01.01.1970")

    cy.get("ul#sorted li").each($pre => {
      const currentDate = parseDate($pre.text())
      expect(prevDate).to.be.lte(currentDate)

      prevDate = currentDate
    })
  })
})
