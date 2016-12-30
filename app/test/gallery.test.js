describe('Gallery component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();
  const mockModule = angular.mock.module('components');
  before(mockModule);
 
  // const images = [{title: 'test', description: 'testing', url: 'test.com', albumId: '124ft'}];
  
  // before(angular.mock.inject($componentController => {
    
  // }));

  describe('Create component', () => {

    // const images = [
    //   { title: 'test1', description: 'just testing', url: 'www.image.com' }
    // ];

    // const imageService = {
    //   get() {
    //     return Promise.resolve(images);
    //   }
    // };

    it('does nothing for now', done => {
      assert.isOk('sup');
      done();
    });


    // it('Loads images', done => {
    //   let component = $component('gallery', { imageService });
    //   setTimeout(() => {
    //     assert.equal(component.album.images, images);
    //     done();
    //   });
    // });

  });


});