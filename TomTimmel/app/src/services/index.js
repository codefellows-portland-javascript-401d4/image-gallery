import angular from 'angular';
import imageService from './image-service';

const service = angular.module('service', [])
  .factory('imageService', imageService);

export default service.name;