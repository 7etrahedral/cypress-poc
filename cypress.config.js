const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
  },
  viewport: {
    viewportHeight: 1024,
    viewportWidth: 768
  }
});
