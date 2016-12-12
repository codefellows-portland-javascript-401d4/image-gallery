import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(images) {

  this.styles = styles;

  this.loading = true;

  images.get().then(images => {
    this.loading = false;
    this.images = images;
  });

  this.detail = function() {
    this.viewDetail = true;
    this.viewThumbnail = false;
    this.viewFull = false;
  };

  this.thumbnail = function() {
    this.viewThumbnail = true;
    this.viewDetail = false;
    this.viewFull = false;
  };

  this.full = function() {
    this.viewFull = true;
    this.viewDetail = false;
    this.viewThumbnail = false;

  };



}
