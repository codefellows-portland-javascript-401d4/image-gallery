const webpackConfig = require( './webpack.config' );
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [ 'mocha', 'chai' ],

    files: [
      './src/app.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/**/*.js'
    ],
  
    webpack: webpackConfig,

    preprocessors: {
      './src/app.js': [ 'webpack' ],
      './test/**/*.js': [ 'babel' ]
    },

    browsers: [ 'Chrome' ],
    reporters: [ 'spec' ],
    port: 9876,
    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
  
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
  
    // Continuous Integration mode: if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  
    // Concurrency level: how many browser should be started simultaneous
    concurrency: Infinity

  });
};