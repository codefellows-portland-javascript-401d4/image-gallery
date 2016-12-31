import template from './new-album.html';
import styles from './new-album.scss';

export default {
  template,
  controller
};

controller.$inject=['albumService'];

function controller(albumService) {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
  };

  this.reset();

  this.addNew = () => {
    albumService.add({
      name: this.name
    });
    // clear out controls so next album can be added
    this.reset();
  };
}
