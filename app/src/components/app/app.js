import template from './app.html';

export default {
  template,
  controller,
  controllerAs: 'app'   
};

controller.$inject = ['imageService'];

function controller(images) {

  this.views = ['add new image', 'image view','text-only view', 'thumbnail view' ];

  this.loading = true;

  images.get().then(images => {
    this.loading = false;
    this.images = images;
  });

  // this.remove = image => {
  //   this.loading = true;
  //   images.remove(image._id)
  //           .then(() => {
  //             this.loading = false;
  //               // after server has updated data, modify in-memory array
  //             const index = this.images.indexOf(image);
  //             if (index > -1) this.images.splice(index, 1);
  //           });
  // };

  this.add = image => {
    this.loading = true;
    images.add(image)
            .then(saved => {
              this.loading = false;
                // push to in-memory array
              this.images.push(saved);
            });
  };
}