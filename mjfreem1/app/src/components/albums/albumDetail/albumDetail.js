import template from './albumDetail.html';

export default {
  template,
  bindings: {
    albums: '<',
    addImage: '<'
  },
  controller,
  controllerAs: 'albumDetailCtrl'
};

// controller.$inject = ['albumService'];

// function controller() {
// }

controller.$inject = ['imageService', 'albumService'];

function controller(/*imageService, albumService*/) {

  // this.$onInit = () => {
  //   console.log(this.albums);
  // };


//   this.addImage = image => {
//     imageService.addImage(image)
//       .then(saved => {
//         const albumId = saved.album;
//         if(albumId === this.album._id) {
//           this.images.push(saved);
//         } else {
//           const foundAlbum = this.albums.find(album => album._id === albumId);
//           if(foundAlbum) {
//             foundAlbum.images.push(saved);
//           } else {
//             albumService.get(albumId)
//               .then(saved => {
//                 this.albums.push(saved);
//                 console.log(this.albums);
//               });
//           }
//         }

      
//       });
//   };
}