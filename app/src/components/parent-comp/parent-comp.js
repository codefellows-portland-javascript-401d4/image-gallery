import template from './parent-comp.html';
import stylesParent from './parent-comp.scss';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = ['imageService', 'albumService'];

function controller (images, albums) {

  this.stylesParent = stylesParent;
  this.loading = true;

  albums.get()
    .then(albums => {
      this.loading = false;
      this.albums = albums;
    });

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
