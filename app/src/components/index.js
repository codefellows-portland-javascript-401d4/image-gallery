import angular from 'angular';
import imageThumbnail from './image-thumbnail/image-thumbnail';
import parentComp from './parent-comp/parent-comp';
import imageText from './image-text/image-text';
import imageFull from './image-full/image-full';
import imageAll from './image-all/image-all';
import newImage from './new-image/new-image';
import welcome from './welcome/welcome';
import about from './about/about';
import aboutStaff from './about/about-staff';

const components = angular.module('components', [])
  .component('parentComp', parentComp)
  .component('about', about)
  .component('aboutStaff', aboutStaff)
  .component('imageThumbnail', imageThumbnail)
  .component('imageText', imageText)
  .component('imageFull', imageFull)
  .component('imageAll', imageAll)
  .component('newImage', newImage)
  .component('welcome', welcome);


export default components.name;


