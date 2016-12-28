import template from './gallery.html';
import styles from './gallery.scss';

export default {
  template,
  bindings: {
    album: '='
  },
  controller
};

controller.$inject = ['imageService'];

function controller(imageService) {
  this.styles = styles;
  this.view = 'thumbnail';

  this.add = image => {
    image.albumId = this.album._id;
    imageService.add(image)
      .then(saved => this.album.images.push(saved))
      .catch(err => {
        console.log('Add img catch', err);
      });
  };

  this.remove = image => {
    imageService.remove(image._id)
      .then(() => {
        const index = this.album.images.indexOf(image);
        if (index > -1) this.album.images.splice(index, 1);
      })
      .catch(err => {
        console.log('Gallery remove catch', err);
      });
  };

}