import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    album: '<'
  },
  controller
};

controller.$inject = ['imageService'];

function controller(imageService) {
  this.styles = styles;

  this.views = ['Details', 'Thumbnail', 'Full Size'];
  this.view = this.views[0];

  this.add = image => {
    image._id = this.album._id;
    imageService.add(image)
      .then(saved => this.album.image.push(saved))
      .catch(err => console.error(err));
  };

  this.remove = image => {
    imageService.remove(image._id)
      .then(() => {
        const index = this.album.images.indexOf(image);
        if(index > -1) this.album.images.splice(index, 1);
      })
      .catch(err => console.error(err));
  };
};