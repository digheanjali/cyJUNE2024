///<reference types="cypress" />

describe('login to contacus page', function () {


    it('verify login functionality of contacus page with valid credencial', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('anjali')
        cy.get('[name="last_name"]').type('pawase')
        cy.get('[name="email"]').type('anjali11@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })



    it('verify login functionality of contacus page with invalid credencial', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('anjali')
        cy.get('[name="last_name"]').type('pawase')
        cy.get('[name="email"]').type('anjali.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain', ' Invalid email address')
    })


    it('verify contact us page for reset button', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('anjali')
        cy.get('[name="last_name"]').type('dighe')
        cy.get('[name="email"]').type('anjali@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="reset"]').click()


        cy.get('[name="first_name"]').should('have.text', "")
        cy.get('[name="last_name"]').should('have.text', "")
        cy.get('[name="email"]').should('have.text', "")
        cy.get('[name="message"]').should('have.text', "")
    })





})