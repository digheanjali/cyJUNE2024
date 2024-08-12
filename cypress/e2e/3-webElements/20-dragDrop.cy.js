///<reference types='cypress' />

describe('verify drag and drop , DB clickin cypress', () => {
    it('verify drag and drop', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        // cy.get('[id="draggable"]').trigger('mousedown',{which:1})
        // cy.get('[id="droppable"]').trigger('mousemove',{which:1}).trigger('mouseup',{force: true})
        // cy.get('p[style="background-color: rgb(244, 89, 80); height: 100%;"] >b').should('have.text','Dropped!')

        cy.get('[id="draggable"]').trigger('mousedown', { button: 1 })
        cy.get('[id="droppable"]').trigger('mousemove', { button: 1 }).trigger('mouseup', { force: true })
        cy.get('p[style="background-color: rgb(244, 89, 80); height: 100%;"] >b').should('have.text', 'Dropped!')
    })
    it('verify DB click', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('[id="double-click"]').should('not.have.class', 'double')
        cy.get('[id="double-click"]').trigger('dblclick', { which: 1 })
        cy.get('[id="double-click"]').should('have.class', 'double')


        cy.get('[id="double-click"]').trigger('dblclick', { which: 1 })
        cy.get('[id="double-click"]').should('not.have.class', 'double')

    })

    it('verify mouse hovour', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('[class="list-alert"]').first().should('not.be.visible')
        //cy.contains('Hover Over Me First!').trigger('mouseover')
        //cy.contains('Hover Over Me First!').invoke('show')
        cy.get('div[class="dropdown-content"]').first().invoke('show')
        cy.get('[class="list-alert"]').first().should('be.visible')
    })

    it('verify click and hold', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('[id="click-box"]').trigger('mousedown', { which: 1 })
        cy.get('[id="click-box"]').should('contain', 'Well done')
        cy.get('[id="click-box"]').trigger('mouseup', { which: 1 })
        cy.get('[id="click-box"]').should('contain', 'release')
    })

    it.only('verify scrollIntoView()', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('[id="file-upload"]').scrollIntoView()
        // cy.get('[id="file-upload"]').should('be.visible')
        cy.get('[id="contact-us"]').scrollTo('bottom', { ensureScrollable: false })
        cy.wait(2000)
        cy.get('[id="popup-alerts"]').focus()
    })
})