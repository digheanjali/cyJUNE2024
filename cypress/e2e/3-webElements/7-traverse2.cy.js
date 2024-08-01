///<reference types="cypress" />

describe('Traversing Methods', function () {

    it('traversing meyhods by letkodit', () => {
        cy.visit('https://www.letskodeit.com/home')
        // cy.get('h4[class="dynamic-heading"]').first().should('have.text', 'Cypress.io Test Automation')
        // cy.get('h4[class="dynamic-heading"]').last().should('have.text', 'Selenium WebDriver 4 With Java')
        // cy.get('h4[class="dynamic-heading"]').eq(3).should('have.text', 'Rest API Automation With Rest Assured')
        // cy.get('.zen-course-author-info').first().children().should('have.length', 2)

        cy.get('.zen-course-img').parent().should('have.attr', 'href', '/courses/cypress-automation-framework')
        // get imidiate parent
        cy.get('.zen-course-img').parents()
        // get All Parents
        cy.get('.zen-course-img').first().parentsUntil('[class="zen-course-list"]').should('have.length', 1)
        // get you want no of parents but last parent not consider.
    })


    it.only('flipkart', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('[placeholder="Search for Products, Brands and More"]').type('bag {enter}')
        // cy.get('[class="syl9yP"]').first().should('have.text', 'Mokobara')
        // cy.get('[class="syl9yP"]').last().should('have.text', 'DEZiRE CRAfTS')
        cy.get('[class="syl9yP"]').eq(11).should('have.text', 'Fast look')

    })
})