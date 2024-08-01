///<reference types='cypress' />
describe('verify radip button and check box', function () {

    //radio button 
    //only one is selected at a time 

    it.skip('verify radio button -webdriver university', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="purple"]').check().should('be.checked')
        cy.get('[value="blue"]').should('not.be.checked')

        //cy.get('input[value="orange"]').click().should('be.checked')
        cy.get('[id="radio-buttons"]').find('[value="orange"]').click().should('be.checked')

        cy.get('[value="purple"]').should('not.be.checked')

    })

    it('verify radio button letkodeit', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#bmwradio').should('not.be.checked')
        cy.get('#bmwradio').click().should('be.checked')
        //cy.get('#bmwradio').uncheck().should('not.be.checked') //will not work
        cy.get('#benzradio').click().should('be.checked')
        cy.get('#bmwradio').should('not.be.checked')
    })

    //checkbox
    //can select multiple at a time
    it('verify check box -webdriver uni', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        cy.get('[value="option-2"]').click().should('be.checked')
        cy.get('[value="option-2"]').click().should('not.be.checked')

    })

    it('verify radio button letkodeit', function () {
        cy.visit('https://www.letskodeit.com/practice')

    })

    it('verify radiobutton/check box -Amazon', function () {
        cy.visit('https://www.amazon.in/')
        cy.get('[class="nav-line-2"]').first().click()
        cy.get('[value="hi_IN"]').click({ force: true })
        cy.get('[value="mr_IN"]').click({ force: true })
    })


})