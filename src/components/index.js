import angular from 'angular';
import imageThumbnail from './image-thumbnail/image-thumbnail';
import parentComp from './parent-comp/parent-comp';
import imageText from './image-text/image-text';
import imageFull from './image-full/image-full';
import imageAll from './image-all/image-all';

const components = angular.module('components', [])
  .component('parentComp', parentComp)
  .component('imageThumbnail', imageThumbnail)
  .component('imageText', imageText)
  .component('imageFull', imageFull)
  .component('imageAll', imageAll);


export default components.name;


