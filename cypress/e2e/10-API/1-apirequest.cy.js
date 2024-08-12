///<reference types="cypress" />
import user1 from "../../fixtures/1-api.json"
import user2 from "../../fixtures/2-api.json"
//GET -- Retrive
//POST -- created
// PUT --update
// DELETE -- delete

describe('GET-Rquest', () => {

    it.skip('verify GET request', () => {
        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET'
        }).then((res) => {
            cy.log(res)
            cy.log(res.body.data)

            expect(res.body.data[0].first_name).to.eq('Michael')
            expect(res.statusText).to.eq("OK")
            expect(res.status).to.eq(200)
        })
    })

    it.skip('verify POST-Request', function () {
        // let user = {
        //     "name": "anjali",
        //     "job": "teacher"
        // }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: user1
            //  user
            // {
            //     "name": "anjali",
            //     "job": "teacher"
            // }
        }).then((res) => {
            cy.log(res)
            //expect(res.body.name).to.eq('anjali')
            // expect(res.body.name).to.eq(user.name)
            expect(res.status).to.eq(201)
            expect(res.statusText).to.eq('Created')

            expect(res.body.name).to.eq(user1.name)



        })
    })

    user2.forEach((el) => {

        it(`reqres POST request2 (create) for ${el.name}`, function () {
            // let user = {
            //     "name": "anjali",
            //     "job": "teacher"
            // }
            cy.request({
                url: 'https://reqres.in/api/users',
                method: 'POST',
                body: el
                //  user
                // {
                //     "name": "anjali",
                //     "job": "teacher"
                // }
            }).then((res) => {
                cy.log(res)
                //expect(res.body.name).to.eq('anjali')
                // expect(res.body.name).to.eq(user.name)
                expect(res.status).to.eq(201)
                expect(res.statusText).to.eq('Created')

                expect(res.body.name).to.eq(el.name)



            })
        })

    })


})