const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: '**/*.spec.cy.js',
    supportFolder: 'test/cypress/support',
    supportFile: 'test/cypress/support/e2e.js',
    downloadsFolder: 'test/cypress/downloads',
  },
  chromeWebSecurity: false,
  video: false,
  watchForFileChanges: true,
  screenshotsFolder: 'test/cypress/screenshots',
  videosFolder: 'test/cypress/videos',
  screenshotOnRunFailure: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  // pageLoadTimeout: 10000,
  defaultCommandTimeout: 10000,
})
