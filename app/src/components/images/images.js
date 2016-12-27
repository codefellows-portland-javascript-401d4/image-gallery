// "Images" page ...

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

  // get all images
  images.get()
    .then (images => {
      this.loading = false;
      this.images = images;
    });

  this.detail = function() { // detail view
    this.imageDetail = true;
    this.imageThumbnail = false;
    this.imageImage = false;
  };

  this.thumbnail = function() { // thumbnail view
    this.imageDetail = false;
    this.imageThumbnail = true;
    this.imageImage = false;
  };

  this.image = function() { // image view
    this.imageDetail = false;
    this.imageThumbnail = false;
    this.imageImage = true;
  };

  // call the GET to load all images
  images.get().then(images => {
    this.loading = false;
    this.images = images;
  });

  // remove this image
  this.remove = image => {
    this.loading = true;
    images.remove(image._id)
      .then(() => {
        this.loading = false;
        // after server has updated data, modify in-memory array
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };

  // add a image
  this.add = image => {
    this.loading = true;
    images.add(image)
      .then(saved => {
        this.loading = false;
        // push to in-memory array
        this.images.push(saved);
      });
  };
}
