import template from './gallery-app.html';
import styles from './gallery-app.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(imgSvc) {
  this.styles = styles;
  this.view = 'Info';
  imgSvc.get()
    .then(images => {
      this.img = images[0];
    });
}