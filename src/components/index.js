import angular from 'angular';

const module = angular.module('components', []);

module.component(imageDetail, './image-detail/image-detail.js');
module.component(imageThumb, './image-thumb/image-thumb.js');


export default module.name;