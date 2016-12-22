import template from './images.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(images) {
  this.loading = true;

  this.views = ['thumbnail', 'detail', 'large'];
  this.view = this.views[2];

  images.get().then(images => {
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

  this.remove = image => {
    this.loading = true;
    images.remove(image._id)
      .then(() => {
        this.loading = false;
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };


  
}