import template from './albums.html';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albums) {
  this.loading = true;

  // this.views = ['thumbnail', 'detail', 'large'];
  // this.view = this.views[2];

  albums.getAll().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

    this.add = album => {
    this.loading = true;
    albums.add(album)
      .then(saved => {
        this.loading = false;
        this.albums.push(saved);
      });
  };

  this.new = () => {
    this.viewNew = true;
    this.viewDetail = false;
  };

  this.detail = () => {
    this.viewDetail = true;
    this.viewNew = false;
  };

  // this.remove = image => {
  //   this.loading = true;
  //   albums.remove(albums._id)
  //     .then(() => {
  //       this.loading = false;
  //       const index = this.images.indexOf(image);
  //       if (index > -1) this.images.splice(index, 1);
  //     });
  // };


  
}