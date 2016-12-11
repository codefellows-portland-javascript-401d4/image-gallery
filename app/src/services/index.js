import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

//import context obj
const context = require.context('./', true, /^\.\/(?!index).+?\.js$/);

//create service module
const module = angular.module('services', []);

//iterate over context obj
context.keys().forEach(key => {
  const name = camelcase(path.basename(key, '.js'));
  module.factory(name, context(key).default);
});

export default module.name; //.name to add module as dependency