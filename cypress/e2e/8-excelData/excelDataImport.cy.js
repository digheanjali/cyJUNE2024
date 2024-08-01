///<reference types="cypress" />
//---------------------------------------------------------------------------------------------
// 4. fallowing steps are as given in youtube video  and link also refered
//    ( https://www.youtube.com/watch?v=_QIJ9JLBYB4)
//    (https://www.mikefettes.com/blog/parsing-xlsx-files-using-cypress)

// 5. npm install node-xlsx --save-dev


// 7. support/ commands.js
//     (copy below code at the last of file)
// -----------------------------------------------------------------
//     Cypress.Commands.add('parseXlsx', (inputFile) => {
//          return cy.task('parseXlsx' , { filePath: inputFile})
//     })
// ------------------------------------------------------------------

// 8.cypress.config.js
//
// ------------------------------------------------------------------
// const { defineConfig } = require("cypress");
// //const { reject } = require("cypress/types/bluebird");
// const xlsx = require('node-xlsx').default;
// const fs = require('fs');
// const path = require('path');
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       on("task", { parseXlsx({ filePath }){
//           return new Promise((resolve, reject) => {
//             try{
//               const jsonData = xlsx.parse(fs.readFileSync(filePath))
//               resolve(jsonData);
//               } catch(e){
//                 reject(e);
//               }
//         });
//       }})
//     }
//   }
// });

// --------------------------------------------------------------------


// describe('import excel data from fixture file', function () {

//     it('import excel data', function () {
//         cy.parseXlsx('C:/Users/OM/OneDrive/Desktop/cyJUNEb/cypress/fixtures/login Credentials2.xlsx').then(function (jsonData) {
//             //cy.log(jsonData[0].data[1][0])

//             for (let i = 1; i <= jsonData[0].data.length; i++) {
//                 cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//                 cy.get('[name="first_name"]').type(jsonData[0].data[i][0])
//                 cy.get('[name="last_name"]').type(jsonData[0].data[i][1])
//                 cy.get('[name="email"]').type(jsonData[0].data[i][2])
//                 cy.get('[name="message"]').type(jsonData[0].data[i][3])
//                 cy.get('[type="submit"]').click()

//                 cy.get('h1').should('have.text', 'Thank You for your Message!')

//             }
//         })

//     })
// })

