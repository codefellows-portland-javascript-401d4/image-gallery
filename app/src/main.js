import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';

const app = angular.module('myApp', [components, services]);

const dev = 'http://localhost:3500/api';
// const prod = '/api/';

// above is same as:
app.factory('apiUrl', function() {
	return dev;
});
