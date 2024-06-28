///<reference types="cypress" />

// const { should } = require("chai")


describe('verify orangeHRM page login functionality', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('verify login functinality with valid data', function () {
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[name="password"]').type('admin123')

        cy.loginOHRM('Admin', 'admin123')


        cy.get('[type="submit"]').click()
        cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible', 'Dashboard')
    })


    it.only('verify login functinality with invalid data', function () {
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[name="password"]').type('anju123')
        // cy.get('[type="submit"]').click()
        // // cy.get('.oxd-alert-content-text').should('be.not.visible', 'Dashboard')
        // cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')

        cy.loginOHRM('admin123', 'admin', '[type="submit"]', '.oxd-alert-content-text')

    })
})