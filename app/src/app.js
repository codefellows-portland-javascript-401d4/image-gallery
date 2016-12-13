
import angular from 'angular';
import components from './components';
import services from './services';
import './main.css';

const app = angular.module('myApp', [components, services]);

const dev = 'http://localhost:3000/api'; // the development URL, production is '/api/'

app.value('apiUrl', dev);
