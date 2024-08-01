///<reference types="cypress" />

describe('get element text by .invoke(),and .text() methode', function () {

    it('get element text by .invoke() methode', () => {
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('[class="section_header"]').invoke('text').then((text) => {
            cy.log(text)
        })
    })

    it('get element by .text() method', () => {
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('.section_header').then(($el) => {
            cy.log($el.text())
        })
    })
})