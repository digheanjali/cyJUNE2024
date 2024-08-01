const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads')

module.exports = defineConfig({
  // chromeWebSecurity : false, //for multitab and multi-window


  downloadsFolder: 'cypress/e2e/6-Downloadfile/downloadedFile',
  e2e: {
    includeShadowDom: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);

      //on('task',{taskname(){funcn def}})

      on('task', {
        print() {
          console.log('welcome')
          return null
        }
      })


      on('task', {
        myLog(msg) {
          console.log(msg)
          return null
        }
      })

      on('task', {
        addition({ a, b }) {
          console.log(a + b)
          return a + b

        }
      })

    },
  },
});
