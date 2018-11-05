import template from './image-app.html';
import './image-app.scss';

// export default {
//   template,
//   controller(){}
// };

export default {
  template,
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  this.gotoImages = () => $state.go('images');
}


