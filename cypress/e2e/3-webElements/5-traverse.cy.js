///<reference types="cypress" />

describe('verify traverse methods', function () {
    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('To get children of DOM elements, use the .children() command', function () {
        cy.get('[class="traversal-drinks-list"]').children().should('have.length', 5)
    })

    it('To get a DOM element at a specific index, use the .eq(index) command', function () {
        cy.get('[class="traversal-drinks-list"]').children().eq(1).should('have.text', 'Tea')
    })

    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.get('[class="traversal-drinks-list"]').children().first().should('have.text', 'Coffee')
    })

    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.get('[class="traversal-drinks-list"]').children().last().should('have.text', 'Sugar')
    })
    //sibling-- next javalcha
    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.get('#milk').next().should('have.text', 'Espresso')
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.get('#milk').prev().should('have.text', 'Tea')
    })


    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.get('#milk').nextAll().should('have.length', 2)
    })

    it('To get all of the previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.get('#milk').prevAll().should('have.length', 2)
    })

    //parents()--give all parents until html

    it('to get DOM element within element using .parents()', function () {
        cy.get('#milk').parents().should('have.length', 6)
    })
    //parentsUntil()--give parents until we want to next parents and it will not consider last parent that we will give in parentsuntil(-)
    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        cy.get('#milk').parentsUntil('.thumbnail').should('have.length', 1)
    })
    //siblings()-- exception milk(sodun) get all next and previous element 
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.get('#milk').siblings().should('have.length', 4)
    })

    it.only('To get descendant DOM elements of the selector, use the .find() command.', function () {
        cy.get('#form-textfield').find('[name="firstname"]').type('anjali')
    })

    it.only('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        cy.get('[class="traversal-button-states"]').children().filter('.btn-outline-danger').should('have.text', 'Danger')
    })


    it.only('to get DOM element within element using .not()', function () {
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
    })


    it.only('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.get('[name="firstname"]').closest('.thumbnail').should('have.attr', 'id', 'thumbnail-1')
    })
})