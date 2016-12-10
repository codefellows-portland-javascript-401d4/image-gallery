import angular from 'angular';
import galleryService from './gallery-service';

angular.module('services', [])
  .factory('galleryService', galleryService);


export default module.name;