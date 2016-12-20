import template from './images.html';
import styles from './images.scss';

controller.$inject = ['imageService'];

export default {
  template,
  bindings: {
    image: '=',
    images: '=',
    albums: '=',
    album: '='
  },
  controller,
  controllerAs: '$images'
};

function controller(imageService) {
  this.styles = styles;
  
  this.view = 'list';

  this.toggleView = name => {
    this.view = name;
  };

  this.removeImage = image => {
    this.loading = true;
    imageService.remove(image._id)
      .then(() => {
        this.loading = false;
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };

  this.myAlbum = '- pick one -';

}