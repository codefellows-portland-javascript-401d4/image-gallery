import template from './list-album.html';
import styles from '../mantids/mantis-detail/mantis-detail.scss';

// export default {
//   template,
//   bindings: {
//     // listAlbum: '=',
//     album: '=',
//     remove: '<'
//   },
//   controller
// };
//
// function controller() {
//   this.styles = styles;
//
//   this.delete = () => {
//     // this.remove(this.listAlbum);
//     this.remove(this.album);
//   };
// }

export default {
  template,
  controller,
  bindings: {
    album: '<',
    albums: '<',
    images: '<'
  }
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
