import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

// .context is method that webpack adds to 'require'
const context = require.context(
  './',  // this directory
  true,  // include subdirectories
  /^\.\/(?!index).+?\.js$/  // regex match any .js except this one
);

// create module to put resources in,
// in this case, components
const module = angular.module('components', []);

// iterate each of the found required contexts (files)
context.keys().forEach(key => {
  // convert kabob-case to camelcase
  const name = camelcase(path.basename(key, '.js'));
  // add the component to the components module
  module.component(name, context(key).default);
});

// export the name of the module for
// adding as a dependency at the app level
export default module.name;
