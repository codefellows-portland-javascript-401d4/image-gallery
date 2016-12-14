import template from './parent-comp.html';
import stylesParent from './parent-comp.scss';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller (images) {

  this.stylesParent = stylesParent;
  this.loading = true;

  images.get()
    .then(images => {
      this.loading = false;
      this.images = images;
    });

  this.add = image => {
    this.loading = true;
    images.add(image)
      .then(saved => {
        this.loading = false;
        this.images.push(saved);
      });
  };
}
