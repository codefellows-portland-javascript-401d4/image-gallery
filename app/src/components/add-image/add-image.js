import template from './add-image.html';
import style from './add-image.scss';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

controller.$inject = ['galleryService'];

function controller(galleryService) {
  this.style = style;

  this.reset = function() {
    this.title = '';
    this.url = '';
    this.description = '';
  };

  // Start the page with blank input fields
  this.reset();

  this.add = function() {

    let newImage = {
      title: this.title,
      url: this.url,
      description: this.description
    };

    console.log('the new image is: ', newImage);

    galleryService.add(newImage)
      .then(saved => {
        console.log('inside the service add, saved is: ', saved);
      });

    this.reset();

  };

}