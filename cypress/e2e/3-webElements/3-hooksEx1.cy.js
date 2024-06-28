//hooks using cypress custom commands

///<reference types="cypress" />

describe('verify contactus page', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it.skip('verify contactus page with valid data', function () {
        // cy.get('[name="first_name"]').type('anjali')
        // cy.get('[name="last_name"]').type('pawase')
        // cy.get('[name="email"]').type('anjali@gmail.com')
        // cy.get('[name="message"]').type('i am learining cypress')

        //using custom command reduce the reusable code

        cy.logincUS('anjali', 'pawase', 'anju@gmail.com', 'i am learning python')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })


    it.only('verify contactus page with invalid data', function () {
        //     cy.get('[name="first_name"]').type('anjali')
        //     cy.get('[name="last_name"]').type('pawase')
        //     cy.get('[name="email"]').type('anjaligmail.com')
        //     cy.get('[name="message"]').type('i am learining cypress')
        //     cy.get('[type="submit"]').click()
        //     cy.get('body').should('contain', 'Invalid email address')
        cy.logincUS2('anju', 'dighe', 'anju', 'i am learning java', '[type="submit"]', 'body')



    })



    it('verify contactus page with reser data', function () {
        cy.get('[name="first_name"]').type('anjali')
        cy.get('[name="last_name"]').type('pawase')
        cy.get('[name="email"]').type('anjaligmail.com')
        cy.get('[name="message"]').type('i am learining cypress')
        cy.get('[type="reset"]').click()


        cy.get('[name="first_name"]').should('have.text', "")
        cy.get('[name="last_name"]').should('have.text', "")
        cy.get('[name="email"]').should('have.text', "")
        cy.get('[name="message"]').should('have.text', "")
        // cy.get('[type="reset"]').click()
    })
})