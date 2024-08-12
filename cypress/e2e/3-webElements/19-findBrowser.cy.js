///<reference types="cypress" />

describe('verify contact us page', function () {   //test scenario / suite
    it.only('verify contact us page for valid data', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.log(`Running in ${Cypress.browser.name}`)

        cy.log(`Browser family ${Cypress.browser.family}`)
        cy.log(`Browser version ${Cypress.browser.version}`)
        cy.log(`Browser major version ${Cypress.browser.majorVersion}`)

        if (Cypress.browser.name === 'edge') {
            cy.log('edge')
        }
    })
})