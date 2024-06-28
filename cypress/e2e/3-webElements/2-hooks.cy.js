///<reference types="cypress" />

// Hooks===>


describe('verify hooks function', function () {

    before(function () {
        cy.log('i will execute first once')
    })

    beforeEach(function () {
        cy.log('i will execute before every test case ')
    })

    afterEach(function () {
        cy.log('i will execute after every test case')
    })

    after(function () {
        cy.log('i will execute at the last -once')
    })

    it('test casr one ', function () {
        cy.log('i am test case one')
    })

    it('test case two', function () {
        cy.log('i am test case two')
    })

})
