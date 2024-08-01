///<reference types="cypress" />

describe('practise example', function () {

    it('amazonprime', function () {
        cy.visit('https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root')

        cy.get('[aria-label="Search Prime Video"]').click()
        cy.get('[type="search"]').type('tig')
        cy.get('[class="SDdJQi"]>a').each(function (el) {
            // cy.log(el)
            if (el.text().includes('ek tha tiger')) {
                cy.wrap(el).click()
                cy.get('[data-testid="carousel-title"]>p').should('contain', 'ek tha tiger')

                cy.get('[data-card-title="Ek Tha Tiger"] > [data-testid="card-section"] > [data-testid="packshot"] > ._3HZFFn').click()

            }
            //or
            // .then(function () {
            //     cy.get('[data-testid="carousel-title"]>p').should('contain', 'ek tha tiger')

        })

    })

    it.only('calculator', function () {
        cy.visit('https://www.desmos.com/scientific')
        cy.get('[aria-label="5"]').click()
        cy.get('[aria-label="Times"]').click()
        cy.get('[aria-label="3"]').click()


        let str = ""
        cy.get('[class="dcg-mq-root-block"]').first().children().each((el) => {
            // cy.log(el.text()) ==> =15
            str += el.text()
        }).then(() => {
            //cy.log(str.slice(1))
            expect(str.slice(1)).to.eq('15')

        })

    })
})
