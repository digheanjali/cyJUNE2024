///<reference types="cypress" />

import data from "../../fixtures/1-api.json"
import data2 from "../../fixtures/2-api.json"

describe("reqres api testing", function () {

    it('GET request ', () => {
        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET'
        }).then((res) => {
            cy.log(res)
            expect(res.body.data[0].id).to.eq(7)
            expect(res.statusText).to.eq("OK")
            expect(res.status).to.eq(200)

        })

    })

    it('POST request', () => {

        let user = {
            "name": "rahul",
            "job": "leader"
        }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: data
            //user
            //{
            //     "name": "rahul",
            //     "job": "leader"
            // }
        }).then((res2) => {
            cy.log(res2)
            // expect(res2.body.name).to.eq("rahul")
            // expect(res2.body.name).to.eq(user.name)
            expect(res2.body.name).to.eq(data.name)


        })

    })

    data2.forEach((el) => {

        it(`POST request ${el.name}`, () => {

            let user = {
                "name": "rahul",
                "job": "leader"
            }
            cy.request({
                url: 'https://reqres.in/api/users',
                method: 'POST',
                body: el
                //data
                //user
                //{
                //     "name": "rahul",
                //     "job": "leader"
                // }
            }).then((res2) => {
                cy.log(res2)
                // expect(res2.body.name).to.eq("rahul")
                // expect(res2.body.name).to.eq(user.name)
                expect(res2.body.name).to.eq(el.name)


            })

        })

    })


    it.only('PUT(Update) request', () => {
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'PUT',
            body: {
                "name": "santosh pawase",
                "job": "zion resident"
            }
        }).then((res3) => {
            cy.log(res3)
            expect(res3.body.name).to.eq("santosh pawase")
            expect(res3.statusText).to.eq("OK")
        })
    })

    it.only('DELETE request', () => {
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'DELETE'
        }).then((res4) => {
            expect(res4.status).to.eq(204)
        })
    })


})