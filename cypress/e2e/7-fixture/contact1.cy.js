///<reference types='cypress' />

describe('verify payload by fixture in cypress', function () {
    let info = {
        firstName: "siya",
        lastName: "dighe",
        email: "siya@gmail.com",
        msg: "python"
    }

    it('1. verify contact us form', function () {
        //AAA
        //Arrengements
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //Actions
        cy.get('[name="first_name"]').type('siya')
        cy.get('[name="last_name"]').type('dighe')
        cy.get('[name="email"]').type('siya@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()

        //Assertions
        cy.get('h1').should('have.text', 'Thank You for your Message!')


    })

    it('2. verify contact us form', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(info.firstName)
        cy.get('[name="last_name"]').type(info.lastName)
        cy.get('[name="email"]').type(info.email)
        cy.get('[name="message"]').type(info.msg)
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')


    })
    //cy.fixture
    it('3. verify contact us form', function () {
        cy.fixture("contact1").then(function (user) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.firstName)
            cy.get('[name="last_name"]').type(user.lastName)
            cy.get('[name="email"]').type(user.email)
            cy.get('[name="message"]').type(user.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    it.only('4. verify contact us form', function () {
        cy.fixture("contact2").then(function (user) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.userOne.firstName)
            cy.get('[name="last_name"]').type(user.userOne.lastName)
            cy.get('[name="email"]').type(user.userOne.email)
            cy.get('[name="message"]').type(user.userOne.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })


    it.only('4. verify contact us form', function () {
        cy.fixture("contact2").then(function (user) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.userTwo.firstName)
            cy.get('[name="last_name"]').type(user.userTwo.lastName)
            cy.get('[name="email"]').type(user.userTwo.email)
            cy.get('[name="message"]').type(user.userTwo.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })


})