import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';

const app = angular.module('galleryApp', [components, services]);
const dev = 'http://localhost:3000/api';

app.value('apiUrl', dev);

app.factory('apiUrl', function() {
  return dev;
});
