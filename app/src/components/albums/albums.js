import template from './albums.html';

export default {
  template,
  controller
};

controller.$inject = ['albumsService'];

function controller(albums) {
  this.loading = true;

  // this.views = ['thumbnail', 'detail', 'large'];
  // this.view = this.views[2];

  albums.get().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

    this.add = albums => {
    this.loading = true;
    albums.add(albums)
      .then(saved => {
        this.loading = false;
        this.albums.push(saved);
      });
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