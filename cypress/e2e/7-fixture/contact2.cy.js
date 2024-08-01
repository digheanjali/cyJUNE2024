///<reference types='cypress' />
//import variable-name from "path"
import user1 from "../../fixtures/contact1.json"
import user2 from "../../fixtures/contact2.json"
import user3 from "../../fixtures/contact3.json"


describe('verify payload by fixture in cypress', function () {


    it('. verify contact us form', function () {
        //cy.log(user1)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(user1.firstName)
        cy.get('[name="last_name"]').type(user1.lastName)
        cy.get('[name="email"]').type(user1.email)
        cy.get('[name="message"]').type(user1.msg)
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')


    })

    it.only('. verify contact us form', function () {
        //cy.log(user2)
        for (let keys in user2) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(user2[keys].firstName)
            cy.get('[name="last_name"]').type(user2[keys].lastName)
            cy.get('[name="email"]').type(user2[keys].email)
            cy.get('[name="message"]').type(user2[keys].msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')

        }
    })
    it('. verify contact us form', function () {
        //cy.log(user2)
        user3.forEach(function (el) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"]').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });

    })

    user3.forEach(function (el, index) {
        it(`verify contact us form for user ${index + 1}`, function () {
            //cy.log(user2)

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"]').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });

    })


})