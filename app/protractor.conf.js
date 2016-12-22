exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'test-e2e-src/**/*.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:8080',

  framework: 'jasmine'

};