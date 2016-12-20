import template from './views.html';
//
export default {
  template,
  controller
};
// // //
controller.$inject = ['spiderService'];

console.log('wahoo');
// // //
function controller(spiders) { 
// //
//   console.log('yahoo!!!');
  // this.loading = true;

  // get all images
  // spiders.get()
  //   .then (spiders => {
  //     this.loading = false;
  //     this.spiders = spiders;
  //   });

  // this.detail = function() {
  //   this.viewDetail = true;
  //   this.viewThumbnail = false;
  //   this.viewImage = false;
  // };

  // this.thumbnail = function() {
  //   this.viewDetail = false;
  //   this.viewThumbnail = true;
  //   this.viewImage = false;
  // };

  // this.image = function() {
  //   this.viewDetail = false;
  //   this.viewThumbnail = false;
  //   this.viewImage = true;
  // };

}
