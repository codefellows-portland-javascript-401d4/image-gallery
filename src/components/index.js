import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';


const context = require.context(
  './', // this directory
  true, // include subdirectories
  /^\.\/(?!index).+?\.js$/ // regex match any .js except this one
);

const module = angular.module('components', []);

context.keys().forEach(key => {
  // convert kabob-case to camelCase
  const name = camelcase(path.basename(key, '.js'));
  module.component(name, context(key).default);
});

export default module.name;