///<reference types="cypress" />

describe('verify Shadow Dom in cypress', function () {

    it('type1', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('shadow-signup-form').shadow().find('[name="username"]').type('anjali')
        cy.get('shadow-signup-form').shadow().find('[name="email"]').type('anjali@gmail.com')
        cy.get('shadow-signup-form').shadow().find('[name="password"]').type('anju18')
        cy.get('shadow-signup-form').shadow().find('[name="confirm_password"]').type('anju18')
        cy.get('shadow-signup-form').shadow().find('[type="button"]').click()
    })

    it('type2', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('[name="username"]', { includeShadowDom: true }).type('anjali')
        cy.get('[name="email"]', { includeShadowDom: true }).first().type('anjali@gmail.com')
        cy.get('[name="password"]', { includeShadowDom: true }).type('anju18')
        cy.get('[name="confirm_password"]', { includeShadowDom: true }).type('anju18')
        cy.get('[type="button"]', { includeShadowDom: true }).click()

    })

    // //type3 includeShadowDom:true in config.js file inside e2e
    it.only('type3', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('[name="username"]').type('anjali')
        cy.get('[name="email"]').first().type('anjali@gmail.com')
        cy.get('[name="password"]').type('anju18')
        cy.get('[name="confirm_password"]').type('anju18')
        cy.get('[type="button"]').click()

    })
})