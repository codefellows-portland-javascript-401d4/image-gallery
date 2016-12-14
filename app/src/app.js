import angular from 'angular';
import './scss/main.scss';

import components from './components';
import services from './services';

const app = angular.module('myApp', [components, services]);

const dev = 'http://localhost:3000';

app.value('apiUrl', dev);

app.factory('apiUrl', function(){
  return dev;
});