exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'test-e2e/**/*.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  // seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8080',

  framework: 'jasmine',

  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  },

  jasmineNodeOpts: {
    print: function() {}
  }
  
};
