import template from './images.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller(images) {
  this.view = 'list';

  this.loading = true;

  images.get().then(images => {
    this.loading = false;
    this.images = images;
  });

  // this.images = [
  //   {name: 'anarchobunny', description: 'this is anarchobunny, he likes tools, syndicalists and bandanas', url: 'http://photos1.blogger.com/blogger/7318/426/1600/anarchobunny.jpg'}
  // ];

  this.remove = image => {
    this.loading = true;
    images.remove(image._id)
      .then(() => {
        this.loading = false;
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };

  this.toggleView = name => {
    this.view = name;
  };

}