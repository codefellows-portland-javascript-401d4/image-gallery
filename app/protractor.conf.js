exports.config = {

	allScriptsTimeout: 11000,

	specs: [
		'test-e2e/**/*.js'
	],

	// suites: {
	// 	home: 'test-e2e/home.test.js',
	// 	full: 'test-e2e/**/*.test.js'
	// },

	capabilities: {
		browserName: 'chrome'
	},

    // seleniumAddress: 'http://localhost:4444/wd/hub',

	baseUrl: 'http://localhost:8080',

	framework: 'jasmine',

	// jasmineNodeOpts: {
	// 	defaultTimeoutInterval: 30000
	// }

	onPrepare: function() {
		var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
		jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
	}

};