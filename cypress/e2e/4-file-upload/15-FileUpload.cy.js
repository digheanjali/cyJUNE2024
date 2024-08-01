///<reference types="cypress" />


//for file upload always \ convert into /===>bcz window does not suppoort \ format 
//for single file upload  in this folder ==> right click on file and copy relative path
//other way is you can copy file from any location and paste this file in your cypress/e2e in desktop(or your cypress folder loction)
//or copy directly copy path 
describe('file uploade in cypress', function () {
    it('single file upload', function () {
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path1 = 'cypress/e2e/4-file-upload/info.txt'
        cy.get('[id="myFile"]').selectFile(path1)
        
        // pop-up always write before click() event

        cy.on('window:alert', function (text) {
            expect(text).to.eq('Your file has now been uploaded!')
        })
        cy.get('[id="submit-button"]').click()
        cy.url().should('contain', 'info.txt')
    })

    it('multiple file upload', function () {
        cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
        let path2 = 'C:/Users/OM/OneDrive/Desktop/test.json'
        let path1 = 'cypress/e2e/4-file-upload/info.txt'

        cy.get('[id="ember336"]').selectFile([path1, path2])
        cy.get('[id="ember355"').should('contain', 2)

    })


    it.only('multiple file upload', function () {
        cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
        let path2 = 'C:/Users/OM/OneDrive/Desktop/test.json'
        let path1 = 'cypress/e2e/4-file-upload/info.txt'
        let path3 = 'cypress/e2e/4-file-upload/test.json'

        cy.get('[id="ember336"]').selectFile([path1, path2, path3])
        cy.get('[id="ember355"').should('contain', 3)

    })



})

