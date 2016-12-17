import template from './albums.html';

export default {
  template,
  controller,
  controllerAs: 'albumsCtrl'
};

controller.$inject = ['albumService', '$state'];

function controller(albumService, $state) {
  this.viewType = 'single';

  this.changeViewType = () => {
    $state.go($state.current.name, {viewType: this.viewType});
  };

  albumService.get().then(albumArr => {
    console.log('get hello');
    this.albumArr = albumArr;
    console.log(this.albumArr);
  });
}