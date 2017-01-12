exports.config = {

  allScriptsTimeout: 11000,

    // list of file globs
  specs: [
    'test-e2e/**/*.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

    // Leave this out and protractor will start a server for us
    // seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8080',

  framework: 'jasmine'
};
