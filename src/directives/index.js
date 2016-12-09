import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

// .context is a method that webpack add to 'require'
const context = require.context(
  './',  // this directory
  true,  // include subdirectories
  /^\.\/(?!index).+?\.js$/  // regex match any .js except this one
);

// create the module to put the resources in,
// in this case, directives
const module = angular.module('directives', []);

// iterate each of the found required contexts (files)
context.keys().forEach(key => {
  // convert kabob-case to camelcase
  const name = camelcase(path.basename(key, '.js'));
  // add the directive to the directives module
  module.directive(name, context(key).default);
});

// export the name of the module for
// adding as a dependency at the app level
export default module.name;
