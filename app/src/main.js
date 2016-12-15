import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';

const app = angular.module('galleryApp', [
  components,
  services
  ]);

app.value('apiUrl', 'http://localhost:3000/api');
