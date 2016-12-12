import angular from 'angular';
import galleryService from './gallery-service';

// create the services module and put dependencies in directly,
// instead of scraping the directory for .js files
const module = angular.module('services', [galleryService]);

export default module.name;