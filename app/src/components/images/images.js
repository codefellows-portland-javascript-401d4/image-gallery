import template from './images.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller(images) {
  this.view = 'list';

  this.views = ['list', 'thumb', 'view'];

  this.loading = true;

  images.get().then(images => {
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

  this.toggleView = name => {
    this.view = name;
  };

}