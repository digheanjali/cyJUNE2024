///<reference types ="cypress" />

describe('verify API testing in cypress-gorest', function () {

    const token = '8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297'

    it('gorest GET request', () => {
        cy.request({
            url: '/public/v2/users/6940602',  //set base url in config .js file
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            // cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(6940602)
            expect(res.body).to.have.keys('id', 'name', 'email', 'gender', 'status')


        })
    })

    it.only('gorest -POST request', () => {
        cy.request({

            method: 'POST',

            url: '/public/v2/users',
            body: {
                "name": "anjali dighe",
                "gender": "male",
                "email": `anjali${Math.floor(Math.random() * 1000)}@15ce.com`,
                "status": "active"
            },

            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res2) => {
            // cy.log(res2)
            expect(res2.status).to.eq(201)
            expect(res2.body).to.have.keys('id', 'name', 'email', 'gender', 'status')

            return res2.body.id
        }).then((res3) => {
            // cy.log(res3)

        })
    })
})