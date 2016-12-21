import template from './albums.html';

export default {
  template,
  controller,
  controllerAs: 'albumsCtrl'
};

controller.$inject = ['albumService'];

function controller(albumService) {

  // this.$onInit = () => {
  //   console.log()
  // };

  this.removeAlbum = album => {
    albumService.remove(album._id)
      .then(() => {
        console.log('album', album);
        const idx = this.albums.indexOf(album);
        if(idx > -1) this.albums.splice(idx, 1);
      });
  };
}