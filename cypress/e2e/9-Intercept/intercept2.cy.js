///<reference types="cypress" />
// import inerceptData from "../../fixtures/intercept2.json"  //// this called mocking data
import intercept from "../../fixtures/intercept22.json"

describe('verify network request with mocking data using intercept', function () {

    it('GET request', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({ //request body
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }, { //response body
            body: inerceptData

            //     "postId": 1,
            //     "id": 1,
            //     "name": "id labore ex et quam laborum",
            //     "email": "Eliseo@gardner.biz",
            //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"



        }).as('getComment')   //Assign an alias for later use. Reference the alias later within a cy.get() or cy.wait() command with a @ prefix. You can alias DOM elements, routes, stubs and spies.

        cy.contains('Get Comment').click()  //only one sentence/word in web page in that case we can use contains
        cy.wait('@getComment').then((res) => {
            cy.log(res)
            // expect(res.response.body.name).to.eq("id labore ex et quam laborum")
            expect(res.response.body.name).to.eq(inerceptData.name)
            expect(res.response.body.email).to.eq(inerceptData.email)

        })
        cy.get('[class="network-comment"]').should('have.text', inerceptData.body)
    })

    it.skip('POST request', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({ //request body
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'POST'
        }, {
            //response body
            body: intercept
            //{
            //     "name": "tushar pawase",
            //     "email": "tushar@cypress.io",
            //     "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
            //     "id": 501
            // }
        }).as('postComment')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then((res2) => {
            cy.log(res2)
            // (res2.response.statusCode).to.eq(201)
            // expectexpect(res2.response.statusMessage).to.eq("Created")
            // expect(res2.response.statusMessage).to.eq("Created")
            // expect(res2.response.body.name).to.eq("tushar pawase")
            // expect(res2.response.body[1][2]).to.eq(inerceptData[1][2])
            expect(res2.response.body.name).to.eq(intercept.name)



        })
        cy.get('[class="network-post-comment"]').should('have.text', 'POST successful!')
    })

    it.only('update request', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'PUT'
        }, {
            body: {

                "name": "rahul dighe",
                "email": "rahul@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                "id": 1
            }
        }).as('updateComment')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((res3) => {
            cy.log(res3)
            expect(res3.response.statusCode).to.eq(200)
            // expect(res3.response.statusMessage).to.eq("OK")
            expect(res3.response.url).to.eq("https://jsonplaceholder.cypress.io/comments/1")
            expect(res3.response.body.id).to.eq(1)
        })


    })
})