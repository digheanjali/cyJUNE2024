///<reference types="cypress" />


describe('varify static and dynamic dropdown', function () {

    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')

    })

    it.skip('static dropdown(fix-value)', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[class="dropdown-menu-lists"]').first().select('Python')
        cy.get('[class="dropdown-menu-lists"]').eq(1).select('Maven')
    })
    //  ==>for el.text()
    // list > each(function(el){
    // > if(el.text()){
    // cy.wrap(el).click()
    // } >
    // })    or for invoke method ==========
    // list > each(function(el){
    // cy.wrap(el).invoke('text).then((text)=>{
    // if(text=='duck'){
    // cy.wrap(el).click()
    // }
    // })
    // }) > 




    it.skip('dynamic dropdown 1', function () {
        cy.get('[id="myInput"]').type('a')
        cy.get('[id="myInputautocomplete-list"]>div').each(function (el) {
            if (el.text() == 'Almond') {
                cy.wrap(el).click()
                cy.get('[id="submit-button"]').click()
                cy.url().should('contain', 'Almond')
            }
        })
    })

    it.skip('dynamicdropdown2', function () {

        cy.get('[id="myInput"]').type('ca')
        cy.get('[id="myInputautocomplete-list"]>div').each(function (el) {
            if (el.text() == 'Carrots') {
                cy.wrap(el).click()
                cy.get('[id="submit-button"]').click()
                cy.url().should('contain', 'Carrots')

            }
        })

    })

    it('dynamic dropdown 3', function () {
        cy.get('[id="myInput"]').type('ca')
        cy.get('[id="myInputautocomplete-list"]>div').each(function (el) {
            cy.wrap(el).invoke('text').then((text) => {
                if (text == 'Carrots') {
                    cy.wrap(el).click()
                    cy.get('[id="submit-button"]').click()
                    cy.url().should('contain', 'Carrots')
                }
            })
        })


    })
})