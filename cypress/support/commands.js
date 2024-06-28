// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('logincUS', (fn, ln, em, msg) => {
//     cy.get('[name="first_name"]').type(fn)
//     cy.get('[name="last_name"]').type(ln)
//     cy.get('[name="email"]').type(em)
//     cy.get('[name="message"]').type(msg)

// })


// Cypress.Commands.add('logincUS2', (fn, ln, em, msg, css, bd) => {
//     cy.get('[name="first_name"]').type(fn)
//     cy.get('[name="last_name"]').type(ln)
//     cy.get('[name="email"]').type(em)
//     cy.get('[name="message"]').type(msg)
//     cy.get(css).click()
//     cy.get(bd).should('contain', 'Invalid email address')
// })



// Cypress.Commands.add('loginOHRM', (un, pass) => {
//     cy.get('[name="username"]').type(un)
//     cy.get('[name="password"]').type(pass)
// })

Cypress.Commands.add('loginOHRM', (un, pass, css, cls) => {
    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pass)
    cy.get(css).click()
    // cy.get('.oxd-alert-content-text').should('be.not.visible', 'Dashboard')
    cy.get(cls).should('contain', 'Invalid credentials')

})




