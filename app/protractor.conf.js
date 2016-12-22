exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'test-e2e/**/*.js'
  ],

  //OR, define suites:
  // suites: {
  //   welcome: 'test-e2e/welcome.test.js',
  //   full: 'test-e2e/**/*.test.js'
  // },

  capabilities: {
    browserName: 'chrome'
  },

    //leave this out and protractor will start a server for us
    // seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8080',

  framework: 'jasmine',

  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 30000
  // }
};