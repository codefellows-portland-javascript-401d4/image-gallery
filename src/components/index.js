import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

//.content is a method webpack adds to require
const context = require.context(
    './', //this directory
    true, //include subdirectories
    /^\.\/(?!index).+?\.js$/ // match all js files except index
);

//create the module to put the resources in,
//in this case, components
const module = angular.module('components', []);

//iterate over each component in contexts
context.keys().forEach(key => {
    // convert ka-bob to camelCase
    const name = camelcase(path.basename(key, '.js'));
    //add component to the module
    module.component(name, context(key).default);
});

// export the name of the module for
// adding as a dependency at the app level
export default module.name; 

