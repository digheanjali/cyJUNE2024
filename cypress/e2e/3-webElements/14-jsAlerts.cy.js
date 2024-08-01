///<reference types="cypress" />

// jsAlert===> all jsalert write before event(click)
// window:Alert
// window:confirm
// window:prompt

describe('verify Js alert', function () {

    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Window:Alert', function () {
        cy.on('window:alert', function (text) {
            expect(text).to.eq('I am a JS Alert')
            return true

        })

        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })


    it('Window:confirm', function () {
        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS Confirm')
            return true

        })

        cy.contains('Click for JS Confirm').click()
        cy.get('[id="result"]').should('have.text', 'You clicked: Ok')
    })

    it('Window:confirm', function () {
        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS Confirm')
            return false

        })

        cy.contains('Click for JS Confirm').click()
        cy.get('[id="result"]').should('have.text', 'You clicked: Cancel')
    })


    it.only('Window:Prompt', function () {
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('hello')
            return true
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('have.text', 'You entered: hello')

    })

    it.only('Window:Prompt', function () {

        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('hello hii')
            return false
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('have.text', 'You entered: null')

    })



})