exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'test-e2e/**/*.js'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    print: function() {}
  },
  baseUrl: 'http://localhost:8080',
  framework: 'jasmine',

  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }

};