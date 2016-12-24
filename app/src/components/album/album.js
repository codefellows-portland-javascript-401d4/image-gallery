import template from './album.html';

export default {
  template,
  controller,
  bindings: {
    images: '=',
    id: '<'
  }
};

controller.$inject = ['galleryService'];

function controller(galleryService) {

  this.remove = function(imageId) {
    galleryService.removeImage(imageId)
      .then(removed => {
        const index = this.images.indexOf(removed);
        if (index > -1) this.images.splice(index, 1);
        console.log('Deleted: ', removed);
      });
  };

}