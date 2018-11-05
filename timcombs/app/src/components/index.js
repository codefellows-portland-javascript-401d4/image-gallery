import angular from 'angular';
import camelcase from 'camelcase'; //converts ka-bob to camelCase
import path from 'path';

//import context obj - (root dir, include subdirs?, regex file match)
const context = require.context('./', true, /^\.\/(?!index).+?\.js$/);

//create component module
const module = angular.module('components', []);

//iterate over context obj
context.keys().forEach(key => {
  const name = camelcase(path.basename(key, '.js'));
  module.component(name, context(key).default); //default does what?
});

export default module.name; //to add module as dependency