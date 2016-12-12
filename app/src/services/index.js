import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

// .context is a method webpack adds to require
const context = require.context(
    './', //this directory
    true, //include subdirectories
    /^\.\/(?!index).+?\.js$/ //regex match any .js except this one
);

// create the module to put the resources in,
// in this case, directives
const module = angular.module('directives', []);

// iterate each of the found required contexts (files)
context.keys().forEach(key => {
    // convert kabob-case to camel-case
  const name = camelcase(path.basename(key, '.js'));
    // add the component to the components module
  module.directives(name, context(key).default);
});

// export the name of the module for
// adding as a dependecy at the app level
export default module.name;
