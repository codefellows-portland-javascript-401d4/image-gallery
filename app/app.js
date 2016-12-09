
import angular from 'angular';
import components from './src/components';
import services from './src/services';
import './main.css';

angular.module('myApp', [components, services]);

const dev = 'http://localhost:3000/api'; // the development URL, production is '/api/'

app.value('apiUrl', dev);
