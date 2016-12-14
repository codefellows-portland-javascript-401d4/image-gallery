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

  this.remove = image => {
    this.loading = true;
    images.remove(image._id)
      .then(() => {
        this.loading = false;
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };

  this.add = image => {
    this.loading = true;
    images.add(image)
      .then(saved => {
        this.loading = false;
        this.images.push(saved);
      });
  };
}
