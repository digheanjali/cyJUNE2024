const { defineConfig } = require("cypress");

const xlsx = require('node-xlsx').default; // for exel file payload
const fs = require('fs'); // for exel file payload
const path = require('path'); // for exel file payload


// const { verifyDownloadTasks } = require('cy-verify-downloads'); //file download option
// module.exports = defineConfig({

//chromeWebSecurity: false, //for multitab and multi-window

module.exports = defineConfig({
  e2e: {
    includeShadowDom: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here

      //on('task',{taskname(){funcn def}})

      // on('task', {
      //   print() {
      //     console.log('welcome')
      //     return null
      //   }
      // })


      // on('task', {
      //   myLog(msg) {
      //     console.log(msg)
      //     return null
      //   }
      // })

      // on('task', {
      //   addition({ a, b }) {
      //     console.log(a + b)
      //     return a + b

      //   }
      // })

      //-------------------exel data payload-----------------
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      })

    },
  },
})
// });
