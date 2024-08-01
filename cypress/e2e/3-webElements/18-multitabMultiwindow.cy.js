/// <reference types='cypress' />
describe('verify multitab and multi window', function () {
    it('verify multi tab href attribute', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').should('have.attr', 'href').and('include', '/courses')
    })

    it('verify multi tab by removing target attribute', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('contain', '/courses')
    })

    it('verify multi tab without removing target attribute', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').then(function (newTab) {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', '/courses')
        })

    })

    //rahul shetty
    it('verify multi tab by removing target attribute', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').first().invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'qaclickacademy')
    })

    it('verify multi tab without removing target attribute', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').first().then(function (newTab) {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', 'qaclickacademy')
        })

    })

    //verify multi window in cypress

    it.only("verify multi window -letkodeit", function () {
        cy.visit('https://www.letskodeit.com/practice')

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })

        cy.get('#openwindow').click()
        cy.url().should('contain', '/courses')
    })

    it.only('verify multi window -rahulshetty', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })

        cy.get('#openwindow').click()
        cy.url().should('contain', 'qaclickacademy')
    })
})