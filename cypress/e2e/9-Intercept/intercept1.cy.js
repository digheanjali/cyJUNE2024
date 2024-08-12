///<reference types="cypress" />

describe('verify intercept in cypress', () => {

    it('cy.intercept(button click) used for wait for coming response', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }).as('GetComment')

        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then((res) => {             //for distcturing -- (({request,response})=>{})
            // cy.log(res.response.body.body)
            cy.get('[class="network-comment"]').should('have.text', res.response.body.body)

        })
        cy.get('[class="network-comment"]').should('contain', 'laudantium enim quas')


    })
})